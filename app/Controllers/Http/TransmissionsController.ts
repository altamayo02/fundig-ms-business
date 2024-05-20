import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import Transmission from "App/Models/Transmission"
import axios, { HttpStatusCode } from 'axios'
import ServiceExecution from 'App/Models/ServiceExecution'

export default class TransmissionsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Transmission.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Transmission.query().paginate(page, perPage)
            } else {
                return await Transmission.query()
            }
        }
    }
	
	public async create({ request, response }: HttpContextContract) {
        const body = request.body()

        // From this transmission's ServiceExecution,
        let theServiceExecution = await ServiceExecution.findOrFail(body.service_execution_id)
        // get the ServiceExecution's Customer
        await theServiceExecution.load("client", async (theClient) => {
            let result = await axios.get(
                `${Env.get('URL_SECURITY')}/api/loyalties/user/${theClient.securityId}`
            )
            if (result.data.points < 10) {
                response.status(HttpStatusCode.PaymentRequired)
                return {
                    message: 'El cliente no posee suficientes puntos para canjear una transmisión.'
                }
            }
    
            result = await axios.post(
                `${Env.get('URL_SECURITY')}/api/loyalties/exchange`,
                theClient
            )
            const theTransmission: Transmission = await Transmission.create(body)
            return theTransmission
        })
    }

    public async update({ params, request }: HttpContextContract) {
        const theTransmission: Transmission = await Transmission.findOrFail(params.id)
        const body = request.body()
		
		theTransmission.startedAt = body.startedAt
		theTransmission.endedAt = body.endedAt
        return await theTransmission.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theTransmission: Transmission = await Transmission.findOrFail(params.id)
        response.status(HttpStatusCode.NoContent)
        return await theTransmission.delete()
    }
}

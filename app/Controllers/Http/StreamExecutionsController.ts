import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import StreamExecution from "App/Models/StreamExecution"
import axios, { HttpStatusCode } from 'axios'
import ServiceExecution from 'App/Models/ServiceExecution'

export default class StreamExecutionsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await StreamExecution.findOrFail(params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await StreamExecution.query().paginate(page, perPage)
      } else {
        return await StreamExecution.query()
      }
    }
  }
	
	public async create({ request, response }: HttpContextContract) {
    const body = request.body()

    // From this transmission's ServiceExecution,
    // get the ServiceExecution's Customer
    const theServiceExecution = (await ServiceExecution.findOrFail(body.service_execution_id))
    //theServiceExecution.load('client')
    const theClient = theServiceExecution.deceased
    let result = await axios.get(
      `${Env.get('URL_SECURITY')}/api/loyalties/user/${theClient.security_id}`
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
    const theStream: StreamExecution = await StreamExecution.create(body)
    return theStream
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const theStream: StreamExecution = await StreamExecution.findOrFail(params.id)
    //theStream.load('serviceExecution')
    const theServiceExecution = theStream.serviceExecution

    theServiceExecution.startedAt = body.startedAt
    theServiceExecution.endedAt = body.endedAt
    return await theServiceExecution.save()
  }

  public async delete({ params, response }: HttpContextContract) {
      const theStream: StreamExecution = await StreamExecution.findOrFail(params.id)
      response.status(HttpStatusCode.NoContent)
      return await theStream.delete()
  }
}

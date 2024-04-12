import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Handler from 'App/Models/Handler'

export default class HandlersController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Handler.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Handler.query().paginate(page, perPage)
            } else {
                return await Handler.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theHandler: Handler = await Handler.create(body)
        return theHandler
    }

    public async update({ params, request }: HttpContextContract) {
        const theHandler: Handler = await Handler.findOrFail(params.id)
        const body = request.body()
		
		theHandler.user_id = body.user_id
		theHandler.cc = body.cc
		theHandler.department = body.department
		theHandler.city = body.city
		theHandler.address = body.address
		theHandler.phone_number = body.phone_number
        return await theHandler.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theHandler: Handler = await Handler.findOrFail(params.id)
        response.status(204)
        return await theHandler.delete()
    }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'

export default class ServicesController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Service.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Service.query().paginate(page, perPage)
            } else {
                return await Service.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theService: Service = await Service.create(body)
        return theService
    }

    public async update({ params, request }: HttpContextContract) {
        const theService: Service = await Service.findOrFail(params.id)
        const body = request.body()
		// TODO - Assign attributes in body to model
		// theService.attr = body.attr
        return await theService.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theService: Service = await Service.findOrFail(params.id)
        response.status(204)
        return await theService.delete()
    }
}

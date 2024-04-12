import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ServiceExecution from 'App/Models/ServiceExecution'

export default class ServiceExecutionsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await ServiceExecution.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await ServiceExecution.query().paginate(page, perPage)
            } else {
                return await ServiceExecution.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theServiceExecution: ServiceExecution = await ServiceExecution.create(body)
        return theServiceExecution
    }

    public async update({ params, request }: HttpContextContract) {
        const theServiceExecution: ServiceExecution = await ServiceExecution.findOrFail(params.id)
        const body = request.body()
		
		theServiceExecution.started_at = body.started_at
		theServiceExecution.ended_at = body.ended_at
        return await theServiceExecution.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theServiceExecution: ServiceExecution = await ServiceExecution.findOrFail(params.id)
        response.status(204)
        return await theServiceExecution.delete()
    }
}

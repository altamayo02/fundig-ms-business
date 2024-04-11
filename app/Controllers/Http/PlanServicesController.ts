import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PlanService from 'App/Models/ServiceExecution'

export default class PlanServicesController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await PlanService.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await PlanService.query().paginate(page, perPage)
            } else {
                return await PlanService.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const thePlanService: PlanService = await PlanService.create(body)
        return thePlanService
    }

    public async update({ params, request }: HttpContextContract) {
        const thePlanService: PlanService = await PlanService.findOrFail(params.id)
        const body = request.body()
        // TODO - Assign attributes in body to model
		// thePlanService.attr = body.attr
        return await thePlanService.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const thePlanService: PlanService = await PlanService.findOrFail(params.id)
        response.status(204)
        return await thePlanService.delete()
    }
}

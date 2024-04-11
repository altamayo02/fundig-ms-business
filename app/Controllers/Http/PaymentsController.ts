import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Payment from 'App/Models/ServiceExecution'

export default class PaymentsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Payment.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Payment.query().paginate(page, perPage)
            } else {
                return await Payment.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const thePayment: Payment = await Payment.create(body)
        return thePayment
    }

    public async update({ params, request }: HttpContextContract) {
        const thePayment: Payment = await Payment.findOrFail(params.id)
        const body = request.body()
        // TODO - Assign attributes in body to model
		// thePayment.attr = body.attr
        return await thePayment.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const thePayment: Payment = await Payment.findOrFail(params.id)
        response.status(204)
        return await thePayment.delete()
    }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Review from 'App/Models/Review'

export default class ReviewsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Review.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Review.query().paginate(page, perPage)
            } else {
                return await Review.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theReview: Review = await Review.create(body)
        return theReview
    }

    public async update({ params, request }: HttpContextContract) {
        const theReview: Review = await Review.findOrFail(params.id)
        const body = request.body()
		// TODO - Assign attributes in body to model
		// theReview.attr = body.attr
        return await theReview.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theReview: Review = await Review.findOrFail(params.id)
        response.status(204)
        return await theReview.delete()
    }
}

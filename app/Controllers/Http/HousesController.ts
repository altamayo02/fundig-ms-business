import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import House from 'App/Models/House'

export default class HousesController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await House.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await House.query().paginate(page, perPage)
            } else {
                return await House.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theHouse: House = await House.create(body)
        return theHouse
    }

    public async update({ params, request }: HttpContextContract) {
        const theHouse: House = await House.findOrFail(params.id)
        const body = request.body()
		
		theHouse.department = body.department
		theHouse.city = body.city
		theHouse.address = body.address
		theHouse.phone_number = body.phone_number
		theHouse.is_main_house = body.is_main_house
        return await theHouse.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theHouse: House = await House.findOrFail(params.id)
        response.status(204)
        return await theHouse.delete()
    }
}

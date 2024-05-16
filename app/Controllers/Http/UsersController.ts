import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'
import axios, { HttpStatusCode } from 'axios'

export default class UsersController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await User.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await User.query().paginate(page, perPage)
            } else {
                return await User.query()
            }
        }
    }
	
	public async findByMongoId({ request, params }: HttpContextContract) {
        if (params.id) {
            return await User.findByOrFail("user_id", params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await User.query().paginate(page, perPage)
            } else {
                return await User.query()
            }
        }
    }

    public async create({ request, response }: HttpContextContract) {
        const body = request.body()
		if (
			body.name &&
			body.email &&
			body.password
		) {
			const message = {
				name: body.name,
				email: body.email,
				password: body.password
			}
			const result = await axios.post(
				`${Env.get('URL_SECURITY')}/api/users/create`,
				message
			)
			if (result.status == HttpStatusCode.Created) {
				body.user_id = result.data._id
				delete body.name
				delete body.email
				delete body.password
				const theUser: User = await User.create(body)
				return theUser
			}

			response.status(result.status)
			return
		}
		response.status(HttpStatusCode.BadRequest)
    }

    public async update({ params, request }: HttpContextContract) {
        const theUser: User = await User.findOrFail(params.id)
        const body = request.body()
		
		theUser.securityId = body.user_id
		theUser.cc = body.cc
		theUser.department = body.department
		theUser.city = body.city
		theUser.address = body.address
		theUser.phoneNumber = body.phone_number
        return await theUser.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theUser: User = await User.findOrFail(params.id)
        response.status(HttpStatusCode.NoContent)
        return await theUser.delete()
    }
}

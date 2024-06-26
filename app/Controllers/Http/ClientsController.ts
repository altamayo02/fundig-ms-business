import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios, { HttpStatusCode } from 'axios'
import Client from 'App/Models/Client'
import ClientValidator from 'App/Validators/ClientValidator'

export default class ClientsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Client.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Client.query().paginate(page, perPage)
            } else {
                return await Client.query()
            }
        }
    }

    public async create({ request, response }: HttpContextContract) {
        /* const body = request.body()
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
				const theClient: Client = await Client.create(body)
				return theClient
			}

			response.status(result.status)
			return
		}
		response.status(HttpStatusCode.BadRequest) */

        try {
            const validatedData = await request.validate(ClientValidator );
          
            const theClient = await Client.create(validatedData);
            return response.status(201).json({ theClient });
          } catch (error) {
            console.error(error);
            return response.status(400).json({ error: error.message });
          }
    }

    /* public async update({ params, request }: HttpContextContract) {
        const theClient: Client = await Client.findOrFail(params.id)
        const body = request.body()
		
		theClient.securityId = body.user_id
		theClient.cc = body.cc
		theClient.department = body.department
		theClient.city = body.city
		theClient.address = body.address
		theClient.phoneNumber = body.phone_number
		theClient.deceased = body.deceased
        return await theClient.save()
    } */

    public async update({ params, request, response }: HttpContextContract) {
        try {
          const validatedData = await request.validate(ClientValidator)
    
          const theClient = await Client.findOrFail(params.id)
    
          // Actualizar solo los campos que han sido proporcionados en la solicitud
          theClient.merge(validatedData)
    
          await theClient.save()
    
          return response.status(200).json(theClient)
        } catch (error) {
          if (error.messages) {
            return response.status(422).json({ errors: error.messages })
          }
          return response.status(500).json({ error: 'Something went wrong' })
        }
    }

    public async delete({ params, response }: HttpContextContract) {
        const theClient: Client = await Client.findOrFail(params.id)
        response.status(204)
        return await theClient.delete()
    }

    // TODO - Delegate holder status
}

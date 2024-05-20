import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Administrator from 'App/Models/Administrator'
import AdministratorValidator from 'App/Validators/AdministratorValidator'

export default class AdministratorsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Administrator.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Administrator.query().paginate(page, perPage)
            } else {
                return await Administrator.query()
            }
        }
    }

    public async create({ request, response }: HttpContextContract) {
        try {
            const validatedData = await request.validate(AdministratorValidator)
            const theAdministrator: Administrator = await Administrator.create(validatedData)
            return response.status(201).json({theAdministrator})
        } catch (error) {
            if(error.messages){
                return response.status(422).json({errors:error.messages})
            }

            return response.status(500).json({errors:error})
        }

    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
          const validatedData = await request.validate(AdministratorValidator)
    
          const theAdministrator = await Administrator.findOrFail(params.id)
    
          // Actualizar solo los campos que han sido proporcionados en la solicitud
          theAdministrator.merge(validatedData)
    
          await theAdministrator.save()
    
          return response.status(200).json(theAdministrator)
        } catch (error) {
          if (error.messages) {
            return response.status(422).json({ errors: error.messages })
          }
          return response.status(500).json({ error: 'Something went wrong' })
        }
    }
    

    public async delete({ params, response }: HttpContextContract) {
        const theAdministrator: Administrator = await Administrator.findOrFail(params.id)
        response.status(204)
        return await theAdministrator.delete()
    }
}

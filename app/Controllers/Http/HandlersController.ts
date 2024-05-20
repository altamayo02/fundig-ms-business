import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Handler from 'App/Models/Handler'
import HandlerValidator from 'App/Validators/HandlerValidator'

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

    public async create({ request, response }: HttpContextContract) {
        try {
            const validatedData = await request.validate(HandlerValidator)
            const theHandler: Handler = await Handler.create(validatedData)
            return response.status(201).json({theHandler})
        } catch (error) {
            if(error.messages){
                return response.status(422).json({errors:error.messages})
            }

            return response.status(500).json({errors:error})
        }

    }

    public async update({ params, request, response }: HttpContextContract) {
        try {
          const validatedData = await request.validate(HandlerValidator)
    
          const theHandler = await Handler.findOrFail(params.id)
    
          // Actualizar solo los campos que han sido proporcionados en la solicitud
          theHandler.merge(validatedData)
    
          await theHandler.save()
    
          return response.status(200).json(theHandler)
        } catch (error) {
          if (error.messages) {
            return response.status(422).json({ errors: error.messages })
          }
          return response.status(500).json({ error: 'Something went wrong' })
        }
    }

    public async delete({ params, response }: HttpContextContract) {
        const theHandler: Handler = await Handler.findOrFail(params.id)
        response.status(204)
        return await theHandler.delete()
    }
}

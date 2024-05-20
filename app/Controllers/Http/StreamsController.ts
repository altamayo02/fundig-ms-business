import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Stream from "App/Models/Stream"
import StreamValidator from 'App/Validators/StreamValidator'

export default class StreamsController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Stream.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Stream.query().paginate(page, perPage)
            } else {
                return await Stream.query()
            }
        }
    }

    public async create({ request, response }: HttpContextContract) {
        const data = await request.validate(StreamValidator)

        // Crear una nueva instancia del modelo Stream con los datos validados
        const theStream = await Stream.create(data)
    
        return response.created(theStream)
    }

    public async delete({ params, response }: HttpContextContract) {
        const theStream: Stream = await Stream.findOrFail(params.id)
        response.status(204)
        return await theStream.delete()
    }   
}

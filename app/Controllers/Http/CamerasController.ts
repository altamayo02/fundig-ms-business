import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Camera from 'App/Models/Camera'
import { HttpStatusCode } from 'axios'

export default class CamerasController {
    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Camera.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Camera.query().paginate(page, perPage)
            } else {
                return await Camera.query()
            }
        }
    }
	
	public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theCamera: Camera = await Camera.create(body)
        return theCamera
    }

    public async update({ params, request }: HttpContextContract) {
        const theCamera: Camera = await Camera.findOrFail(params.id)
        const body = request.body()
		
		theCamera.height = body.height
		theCamera.width = body.width
        return await theCamera.save()
    }

    public async delete({ params, response }: HttpContextContract) {
        const theCamera: Camera = await Camera.findOrFail(params.id)
        response.status(HttpStatusCode.NoContent)
        return await theCamera.delete()
    }
}

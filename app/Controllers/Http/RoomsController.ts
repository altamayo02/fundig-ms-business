import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Room from "App/Models/Room"

export default class RoomsController {
	public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Room.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Room.query().paginate(page, perPage)
            } else {
                return await Room.query()
            }
        }
    }

    public async create({ request }: HttpContextContract) {
        const body = request.body()
        const theRoom: Room = await Room.create(body)
        return theRoom
    }

    public async update({ params, request }: HttpContextContract) {
        const theRoom: Room = await Room.findOrFail(params.id)
        const body = request.body()
        // TODO - Assign attributes in body to model
        // theRoom.attr = body.attr
        return await theRoom.save()
    }
    public async delete({ params, response }: HttpContextContract) {
        const theRoom: Room = await Room.findOrFail(params.id)
        response.status(204)
        return await theRoom.delete()
    }
}

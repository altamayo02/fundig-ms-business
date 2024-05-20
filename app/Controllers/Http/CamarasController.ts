import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Camara from 'App/Models/Camara'
import CamaraValidator from 'App/Validators/CamaraValidator'

export default class CamarasController {

    public async find({ request, params }: HttpContextContract) {
        if (params.id) {
            return await Camara.findOrFail(params.id)
        } else {
            const data = request.all()
            if ('page' in data && 'per_page' in data) {
                const page = request.input('page', 1)
                const perPage = request.input('per_page', 20)
                return await Camara.query().paginate(page, perPage)
            } else {
                return await Camara.query()
            }
        }
    }

    public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CamaraValidator)

    // Crear una nueva instancia del modelo Camara con los datos validados
    const camara = await Camara.create(data)

    return response.created(camara)

    }

    public async delete({ params, response }: HttpContextContract) {
        const theCamara: Camara = await Camara.findOrFail(params.id)
        response.status(204)
        return await theCamara.delete()
    }
}

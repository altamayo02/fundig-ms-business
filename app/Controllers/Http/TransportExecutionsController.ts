import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TransportExecution from "App/Models/TransportExecution"
import { HttpStatusCode } from 'axios'

export default class TransportExecutionsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await TransportExecution.findOrFail(params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await TransportExecution.query().paginate(page, perPage)
      } else {
        return await TransportExecution.query()
      }
    }
  }
	
	public async create({ request }: HttpContextContract) {
    const body = request.body()
    const theChatExecution: TransportExecution = await TransportExecution.create(body)
    return theChatExecution
  }

  public async update({ params, request }: HttpContextContract) {
    const theChatExecution: TransportExecution = await TransportExecution.findOrFail(params.id)
    const body = request.body()

    // TODO - Handle update

    return await theChatExecution.save()
  }

  public async delete({ params, response }: HttpContextContract) {
    const theChatExecution: TransportExecution = await TransportExecution.findOrFail(params.id)
    response.status(HttpStatusCode.NoContent)
    return await theChatExecution.delete()
  }
}

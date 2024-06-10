import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ChatExecution from 'App/Models/ChatExecution'
import { HttpStatusCode } from 'axios'

export default class ChatExecutionsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await ChatExecution.findOrFail(params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await ChatExecution.query().paginate(page, perPage)
      } else {
        return await ChatExecution.query()
      }
    }
  }
	
	public async create({ request }: HttpContextContract) {
    const body = request.body()
    const theChatExecution: ChatExecution = await ChatExecution.create(body)
    return theChatExecution
  }

  public async update({ params, request }: HttpContextContract) {
    const theChatExecution: ChatExecution = await ChatExecution.findOrFail(params.id)
    const body = request.body()

    // TODO - Handle update

    return await theChatExecution.save()
  }

  public async delete({ params, response }: HttpContextContract) {
    const theChatExecution: ChatExecution = await ChatExecution.findOrFail(params.id)
    response.status(HttpStatusCode.NoContent)
    return await theChatExecution.delete()
  }
}

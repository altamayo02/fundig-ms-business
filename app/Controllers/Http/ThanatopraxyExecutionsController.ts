import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ThanatopraxyExecution from "App/Models/ThanatopraxyExecution"
import { HttpStatusCode } from "axios"

export default class ThanatopraxyExecutionsController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await ThanatopraxyExecution.findOrFail(params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await ThanatopraxyExecution.query().paginate(page, perPage)
      } else {
        return await ThanatopraxyExecution.query()
      }
    }
  }
	
	public async create({ request }: HttpContextContract) {
    const body = request.body()
    const theChatExecution: ThanatopraxyExecution = await ThanatopraxyExecution.create(body)
    return theChatExecution
  }

  public async update({ params, request }: HttpContextContract) {
    const theChatExecution: ThanatopraxyExecution = await ThanatopraxyExecution.findOrFail(params.id)
    const body = request.body()

    // TODO - Handle update

    return await theChatExecution.save()
  }

  public async delete({ params, response }: HttpContextContract) {
    const theChatExecution: ThanatopraxyExecution = await ThanatopraxyExecution.findOrFail(params.id)
    response.status(HttpStatusCode.NoContent)
    return await theChatExecution.delete()
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

export default class Security {
  public async handle(
	{
		request,
		response
	}: HttpContextContract,
	next: () => Promise<void>
  ) {
    let theRequest = request.toJSON()
    let token = theRequest.headers.authorization.replace('Bearer ', '')
    let thePermission: object = {
      url: theRequest.url,
      method: theRequest.method,
    }
    try {
      const result = await axios.post(
        `${Env.get('URL_SECURITY')}/api/public/security/validate-permissions`,
        thePermission,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (result.data) {
        await next()
      } else {
        return response.status(401)
      }
    } catch (error) {
      console.error(error)
      return response.status(401)
    }
  }
}

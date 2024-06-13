import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'
import axios, { HttpStatusCode } from 'axios'

export default class UsersController {
  public async find({ request, params }: HttpContextContract) {
    if (params.id) {
      return await User.findOrFail(params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await User.query().paginate(page, perPage)
      } else {
        return await User.query()
      }
    }
  }
  
  public async findBySecurityId({ request, params }: HttpContextContract) {
    if (params.id) {
      return await User.findByOrFail("security_id", params.id)
    } else {
      const data = request.all()
      if ('page' in data && 'per_page' in data) {
        const page = request.input('page', 1)
        const perPage = request.input('per_page', 20)
        return await User.query().paginate(page, perPage)
      } else {
        return await User.query()
      }
    }
  }

  public async create({ request, response }: HttpContextContract) {
    const body = request.body();
    
    try {
      const securityId = body.security_id
      if (securityId) {
        const url = `${Env.get('URL_SECURITY')}/api/users/${securityId}`;
        const result = await axios.get(url);
    
        if (result.data !== null) {
          const theUser = await User.create({security_id:`${securityId}`})
          response.status(HttpStatusCode.Created).send(theUser);
          return;
        }
        console.log("sapa")
      }
  
  
      if (body.name && body.email && body.password) {
        const message = {
          name: body.name,
          email: body.email,
          password: body.password
        };

        const createResult = await axios.post(
          `${Env.get('URL_SECURITY')}/api/users/create`,
          message
        );

        if (createResult.status === HttpStatusCode.Created) {
          body.security_id = createResult.data._id;
          delete body.name;
          delete body.email;
          delete body.password;

          const theUser = await User.create(body);
          response.status(HttpStatusCode.Created).send(theUser);
          return;
        }

        response.status(createResult.status).send("Failed to create user");
        return;
      }
  
      response.status(HttpStatusCode.BadRequest).send("Name, email, and password are required if don't have security_id");
    } catch (error) {
      console.error("Error processing request:", error.message);
      response.status(HttpStatusCode.InternalServerError).send("Internal Server Error");
    }
  }

  /*public async update({ params, request }: HttpContextContract) {
      const theUser: User = await User.findOrFail(params.id)
      const body = request.body()
      
      theUser.security_id = body.user_id
      theUser.cc = body.cc
      theUser.department = body.department
      theUser.city = body.city
      theUser.address = body.address
      theUser.phoneNumber = body.phone_number
      return await theUser.save()
  }*/

  public async delete({ params, response }: HttpContextContract) {
    const theUser: User = await User.findOrFail(params.id)
    response.status(HttpStatusCode.NoContent)
    return await theUser.delete()
  }
}

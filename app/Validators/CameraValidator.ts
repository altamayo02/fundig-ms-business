import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CameraValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    // The camara's id
    id: schema.number(),

    // The camara's width
    width: schema.number(),

    // The camara's height 
    height: schema.number(),

  })


  public messages: CustomMessages = {
    'id.required': 'The id is required',
    'width.required': 'The width is required',
    'height.required': 'The height is required',
  }
}

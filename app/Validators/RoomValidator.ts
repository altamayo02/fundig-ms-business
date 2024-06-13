import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RoomValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({

    // The room's price
    price: schema.number(),

    // The room's id  
    id: schema.number(),

    // The room's name
    name: schema.string(),

    // The room's gouse id
    house_id: schema.number(),
  })

  public messages: CustomMessages = {
    'price.required': 'The price is required',
    'id.required': 'The id is required',
    'name.required': 'The name is required',
    'house_id.required': 'The house_id is required',
  }
}

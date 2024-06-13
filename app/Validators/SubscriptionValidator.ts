import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SubscriptionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
  
      // The subscription's id
      id: schema.number(),
  
      // The subscription's STATUS
      status: schema.string(),

      // The subscription's endAt
      endAt: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),

      // The subscription's paymentMethod
      paymentMethod: schema.string(),
  })

  public messages: CustomMessages = {
    'id.required': 'The id is required',
    'status.required': 'The status is required',
    'endAt.required': 'The endAt is required',
    'paymentMethod.required': 'The paymentMethod is required',
  }
}

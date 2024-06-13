import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ServiceExecutionValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({

    // The service execution's service id
    id: schema.number(),

    // The service execution's started_at
    started_at: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),

    // The service execution's ended_at
    ended_at: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),

  })

  public messages: CustomMessages = {
    'id.required': 'The id is required',
    'started_at.required': 'The started_at is required',
    'ended_at.required': 'The ended_at is required',
  }
}

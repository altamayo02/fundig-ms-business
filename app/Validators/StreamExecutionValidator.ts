import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StreamExecutionValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    startedAt: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),
    endedAt: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),
  
    // The transmission's execution id
    executionId: schema.number(),

    // The transmission's status
    status: schema.string(),

    // The transmission's camara id
    camaraId: schema.number(),
  })


  public messages: CustomMessages = {
    'startedAt.required': 'The startedAt is required',
    'endedAt.required': 'The endedAt is required',
    'executionId.required': 'The executionId is required',
    'status.required': 'The status is required',
    'camaraId.required': 'The camaraId is required',
  }
}

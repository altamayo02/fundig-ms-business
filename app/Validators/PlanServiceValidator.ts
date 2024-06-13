import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlanServiceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

    // The plan service's plan_id
    plan_id: schema.number([
      rules.exists({ table: 'plans', column: 'id' }),
      rules.required()
    ]),

   
    // The plan service's service_id
    service_id: schema.number([
      rules.exists({ table: 'services', column: 'id' }),
      rules.required()
    ]),

})
  public messages: CustomMessages = {
    'plan_id.exists': 'The plan_id must exist',
    'plan_id.required': 'The plan_id is required',
    'service_id.exists': 'The service_id must exist',
    'service_id.required': 'The service_id is required',
  }
}

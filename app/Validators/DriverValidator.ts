import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdministratorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.minLength(2),
      rules.required()
    ]), // At least two letters

    userId: schema.string([ 
      rules.exists({ table: 'users', column: 'id' }),  
      rules.required() 
    ]), // Ensure id exists and is provided

    lastName: schema.string([
      rules.minLength(2), 
      rules.required()
    ]), // At least 2 letters

    email: schema.string([
      rules.regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      rules.required(),
    ]), // Must contain @, letters, a dot, and letters

    //TODO: Validate cities
    city: schema.string([
      rules.required(),
    ]),

    address: schema.string([
      rules.required(),
      rules.regex(/^[a-zA-Z0-9]+$/)
    ]), // Must contain letters and numbers

    cc: schema.number([
      rules.required(),
      rules.minLength(5)
    ])
  })

  public messages: CustomMessages = {}
}

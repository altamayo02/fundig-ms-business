import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdministratorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([
      rules.minLength(2),
      rules.required()
    ]), // At least two letters

    user_id: schema.string([
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

    city: schema.string([
      rules.required(),
    ]),

    address: schema.string([
      rules.required(),
      rules.regex(/^[a-zA-Z0-9\s,.-]+$/) // Adjusted regex to include spaces, commas, periods, and hyphens
    ]), // Must contain letters, numbers, spaces, and common punctuation

    cc: schema.number([
      rules.required(),
    ]),

    phoneNumber: schema.number([
      rules.required
    ])
    
  })

  public messages: CustomMessages = {
    'name.minLength': 'At least two letters',
    'name.required': 'Name is required',
    'userId.exists': 'User ID must exist',
    'userId.required': 'User ID is required',
    'lastName.minLength': 'At least 2 letters',
    'lastName.required': 'Last name is required',
    'email.regex': 'Email must be a valid email address',
    'email.required': 'Email is required',
    'city.required': 'City is required',
    'address.regex': 'Address must contain letters, numbers, and common punctuation',
    'address.required': 'Address is required',
    'cc.required': 'Credit card number is required'
}
}

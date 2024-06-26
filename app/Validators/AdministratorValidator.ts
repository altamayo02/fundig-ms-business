import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdministratorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [
      rules.minLength(2),
      rules.required()
    ]), // At least two letters
  
    lastName: schema.string({}, [
      rules.minLength(2), 
      rules.required()
    ]), // At least 2 letters
  
    city: schema.string({}, [
      rules.required()
    ]),
  
    address: schema.string({}, [
      rules.required()
    ]), 
  
    cc: schema.string({}, [
      rules.required()
    ]),
  
    phoneNumber: schema.string({}, [
      rules.required()
    ])
  })

  public messages: CustomMessages = {
    'name.minLength': 'At least two letters',
    'name.required': 'Name is required',
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

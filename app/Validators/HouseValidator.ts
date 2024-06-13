import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HouseValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({

    // At least two letters

    // The house's address
    address: schema.string({}, [
      rules.minLength(2), 
      rules.required()
    ]), 

    // The house's city
    city: schema.string({}, [
      rules.required()
    ]),
    
     department: schema.string({}, [
      rules.required()
    ]),
    phoneNumber: schema.string({}, [
      rules.minLength(10), 
      rules.required()
    ])

  })

  public messages: CustomMessages = {
    'address.minLength': 'The address must be at least two characters long',
    'address.required': 'The address is required',
    'city.required': 'The city is required',
    'department.required': 'The department is required',
    'phoneNumber.minLength': 'The phone number must be at least 10 characters long',
    'phoneNumber.required': 'The phone number is required'
  }
}

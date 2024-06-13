import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class PaymentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

    // The payment's amount
    amount: schema.number(),

    // The payment's method
    method: schema.string(),

    // The payment's status
    status: schema.string(),

    // The payment's date
    DateTime: schema.date({format: 'yyyy-DD-MM hh:mm:ss'}),

    // The payment's currency
    currency: schema.string(),

    // The payment's epaycoAdditionalInfo
    epaycoAdditionalInfo: schema.string(),

  })

  public messages: CustomMessages = {
    'amount.required': 'The amount is required',
    'method.required': 'The method is required',
    'status.required': 'The status is required',
    'DateTime.required': 'The date is required',
    'currency.required': 'The currency is required',
    'epaycoAdditionalInfo.required': 'The epaycoAdditionalInfo is required',
  }
}

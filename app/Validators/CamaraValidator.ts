import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CamaraValidator {
  public schema = schema.create({
    ancho: schema.number([
      rules.range(0, 100)
    ]),
    alto: schema.number([
      rules.range(0, 100)
    ])
  })

  public messages = {
    'ancho.range': 'El ancho debe estar entre 0 y 100.',
    'alto.range': 'El alto debe estar entre 0 y 100.'
  }
}

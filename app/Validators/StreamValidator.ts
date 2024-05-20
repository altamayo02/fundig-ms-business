import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StreamValidator {
  public schema = schema.create({
    fechaInicio: schema.date({}, [
      rules.before('today')
    ]),
    fechaFin: schema.date({}, [
      rules.afterField('fechaInicio')
    ]),
    camaraId: schema.number([
      rules.exists({ table: 'camaras', column: 'id' })
    ]),
    serviceExecutionId: schema.number([
      rules.exists({ table: 'service_executions', column: 'id' })
    ])
  })

  public messages = {
    'fechaInicio.date': 'La fecha de inicio debe ser una fecha válida.',
    'fechaInicio.before': 'La fecha de inicio debe ser anterior a hoy.',
    'fechaFin.date': 'La fecha de fin debe ser una fecha válida.',
    'fechaFin.afterField': 'La fecha de fin debe ser posterior a la fecha de inicio.',
    'camaraId.exists': 'La cámara seleccionada no existe.',
    'serviceExecutionId.exists': 'La ejecución del servicio seleccionada no existe.'
  }
}

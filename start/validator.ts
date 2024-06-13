import { string } from '@ioc:Adonis/Core/Helpers'
import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule('camelCase', (
  value,
  [maxLength],
  options
) => {
  if (typeof value !== 'string') {
    return
  }

  // Sample custom validator
  if (value !== string.camelCase(value)) {
    options.errorReporter.report(
      options.pointer,
      'camelCase',
      'camelCase validation failed',
      options.arrayExpressionPointer
    )
  }
  
  // Rest of the validation
  if (maxLength && value.length > maxLength) {
    options.errorReporter.report(
      options.pointer,
      'camelCase.maxLength', // 👈 Keep an eye on this
      'camelCase.maxLength validation failed',
      options.arrayExpressionPointer,
      { maxLength }
    )
  }
})
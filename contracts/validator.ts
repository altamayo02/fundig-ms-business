// https://v5-docs.adonisjs.com/guides/validator/custom-rules
declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    camelCase(maxLength?: number): Rule
  }
}

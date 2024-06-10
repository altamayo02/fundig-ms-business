import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'locations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('country')
      table.string('department')
      table.string('city')
      table.string('postal_code')
      // "Specified key was too long; max key length is 3072 bytes"
      // locations_country_department_city_postal_code_unique is nowhere 3072B afaIk
      /* table.unique([
        'country',
        'department',
        'city',
        'postal_code'
      ]) */
      // I think this works anyway
      table.unique([
        'country',
        'postal_code'
      ])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

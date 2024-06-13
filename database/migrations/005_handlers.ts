import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'handlers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('security_id')
      table.string('cc')
      table.string('names')
      table.string('surnames')
      table.string('department')
      table.string('city')
      table.string('address')
      table.integer('phone_number')

      table.integer('house_id').references('id').inTable('houses').unsigned()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

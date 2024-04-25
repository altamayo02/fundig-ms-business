import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.integer('service_id').unsigned().references('id').inTable('services').onDelete('CASCADE')
      table.string('pickupCity')
      table.string('pickupAddress')
      table.date('Date')
      table.string('timeStrat')
      table.string('timeEnd')
      table.boolean('closed')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

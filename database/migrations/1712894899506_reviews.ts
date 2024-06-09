import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('rating')
      table.string('comment')

      table.integer('client_id').references('id').inTable('clients').unsigned()
      table.integer('service_execution_id')
        .references('service_executions.id')
        .onDelete('CASCADE')
        .unsigned()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

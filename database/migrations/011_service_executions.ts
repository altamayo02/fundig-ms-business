import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // FIXME - Tentative
      table.integer('cost')
      table.string('note')
      table.datetime('started_at')
      table.datetime('ended_at')

      // If we don't care about the user, why would we care about
      // nobody's service executions?
      table.integer('deceased_id').references('clients.id').onDelete('CASCADE').unsigned()
      table.integer('service_id').references('services.id').onDelete('CASCADE').unsigned()
      table.unique(['deceased_id', 'service_id'])
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

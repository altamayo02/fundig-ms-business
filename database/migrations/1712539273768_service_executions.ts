import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.datetime('started_at')
		table.datetime('ended_at')
		// If we don't care about the user, why would we care about
		// nobody's service executions?


		
		table.timestamp('created_at', { useTz: true })
		table.timestamp('updated_at', { useTz: true })
    }).alterTable('service_executions', (table) => {
		table.integer('execution_id').references('executions.id').onDelete('CASCADE').unsigned()
		table.integer('service_id').references('services.id').onDelete('CASCADE').unsigned()
    table.integer('room_id').references('id').inTable('rooms').unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

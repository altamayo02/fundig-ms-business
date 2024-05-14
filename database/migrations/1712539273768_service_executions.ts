import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.datetime('started_at')
		table.datetime('ended_at')
		// Service-specific attributes
		/* table.string('pickup_city')
		table.string('pickup_address')
		table.integer('room_id').references('rooms.id') */
		// If we don't care about the user, why would we care about
		// nobody's service executions?
		table.string('client_id').references('clients.id').onDelete('CASCADE')
		table.string('service_id').references('services.id')
		table.unique(['client_id', 'service_id'])

		table.timestamp('created_at', { useTz: true })
		table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

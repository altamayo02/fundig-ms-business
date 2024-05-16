import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.datetime('started_at')
		table.datetime('ended_at')
		// Service-specific attributes
		//table.string('pickup_city')
		//table.string('pickup_address')
		//table.integer('room_id').references('rooms.id')
		table.string('clientId').references('clients.id').onDelete('CASCADE')
		table.string('serviceId').references('services.id')

		table.timestamp('created_at', { useTz: true })
		table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

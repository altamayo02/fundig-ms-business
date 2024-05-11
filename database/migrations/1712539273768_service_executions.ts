import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
    table.increments('id')
	  table.datetime('ended_at')
	  table.string('client_id').references('clients.id')
	  table.string('service_id').references('services.id')
    table.string('city')
    table.string('pickupAddress')
    table.string('pickupCity')
    table.integer('rooms_id').references('rooms.id') //Referencia a la habitación

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

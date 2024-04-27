import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'service_executions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
	  table.datetime('started_at')
	  table.datetime('ended_at')
	  table.string('client_id').references('clients.id')
	  table.string('service_id').references('services.id')
	  
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

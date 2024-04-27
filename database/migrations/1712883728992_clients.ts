import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
	  table.string('user_id')
	  table.string('cc')
	  table.string('department')
	  table.string('city')
	  table.string('address')
	  table.integer('phone_number')
	  table.boolean('deceased')
	  table.string('titular_id').references('clients.id')
	  table.string('service_execution_id').references('service_executions.id')
	  table.string('subscription_id').references('subscriptions.id')
	  
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

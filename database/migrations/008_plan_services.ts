import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'plan_services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('plan_id')
        .references('plans.id')
        .onDelete('CASCADE')
        .unsigned()
      table.integer('service_id')
        .references('services.id')
        .unsigned()
      table.unique(['plan_id', 'service_id'])
	  
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

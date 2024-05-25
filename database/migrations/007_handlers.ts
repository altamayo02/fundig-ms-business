import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'handlers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
	  table.string('cc')
	  table.string('department')
	  table.string('city')
	  table.string('address')
	  table.integer('phone_number')
    table.integer('user_id').references('id').inTable('users').unsigned()
	  table.integer('house_id').references('id').inTable('houses').unsigned()
	  // ? - Relate Houses to Handlers
	  // TODO - Relate ServiceExecutions to Handlers

	  table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'administrators'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
	  table.string('cc')
	  table.string('department')
	  table.string('city')
	  table.string('address')
	  table.integer('phone_number')
	  table.string('responsibilities')
	  table.integer('house_id').references('id').inTable('houses').unsigned()
    table.integer('user_id').references('id').inTable('users').unsigned()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

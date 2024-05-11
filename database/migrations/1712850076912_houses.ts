
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'houses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
	  table.string('department')
	  table.string('city')
	  table.string('address')
	  table.integer('phone_number')
	  table.boolean('is_main_house')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

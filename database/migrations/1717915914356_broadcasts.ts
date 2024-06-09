import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'broadcasts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('camera_id')
        .references('cameras.id')
        .onDelete('CASCADE')
        .unsigned()
      table.integer('transmission_execution_id')
        .references('transmission_executions.id')
        .onDelete('CASCADE')
        .unsigned()
      table.unique(['camera_id', 'transmission_execution_id'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

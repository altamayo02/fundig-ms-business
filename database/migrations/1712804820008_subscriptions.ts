import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'subscriptions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('status')
      table.integer('payments_streak')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    }).alterTable(this.tableName, (table) => {
      table.integer('plan_id').references('id').inTable('plans').unsigned()
      table.integer('client_id').references('id').inTable('clients').unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

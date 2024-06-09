import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('amount')
      table.string('currency')
      table.string('status')
      table.dateTime('paid_at')
      table.string('e_payco_metadata')
      table.string('method')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    }).alterTable(this.tableName, (table) => {
      table.integer('subscription_id')
        .references('subscriptions.id')
        .onDelete('RESTRICT')
        .unsigned()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'subscriptions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('status') //Estado de la suscrición
      table.dateTime('endAt') //Terminado en
      table.integer('paymentFrequency') //Frecuencia de pago

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    }).alterTable('subscriptions', (table) => {
      table.integer('plan_id').references('id').inTable('plans').unsigned() //Referencia al plan
      table.integer('client_id').references('id').inTable('clients').unsigned() //Referencia al client
      })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

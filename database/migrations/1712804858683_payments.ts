import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.double('amount') //Valor del pago
      table.string('currency') //Moneda del pago
      table.string('status') //Estado de epayco
      table.dateTime('dateTime') //Fecha y hora
      table.integer('EpaycoAdditionalInfo') //Información adicional de epayco
      table.string('method') //Metodo usado
      table.integer('subscriptions_id').references('id').inTable('subscriptions').onDelete('RESTRICT') //Referenci a la suscripción

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

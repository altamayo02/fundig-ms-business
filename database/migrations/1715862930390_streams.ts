import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'streams'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.dateTime("fechaInicio")
      table.dateTime("fechaFinal")

      table.integer('camaraId').references('camaras.id').unsigned()
      table.integer("serviceExecutionId").references('service_executions.id').unsigned()

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

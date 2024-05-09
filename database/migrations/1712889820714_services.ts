import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'services'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name') // name of the service
      table.string('description') // description of the service
      table.boolean('status') // status of the service
      table.double('cost')//cost of the service



      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.integer('cost')
      table.string('description')
      table.string('name')
      table.boolean('status')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name') // name of the plan
      table.string('description') // description of the plan
      table.boolean('status') // status of the plan
      table.double('cost')//cost of the plan
      table.integer('type')//type of the plan
      table.integer('amoiunBeneficiares')//amount of beneficiaries

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

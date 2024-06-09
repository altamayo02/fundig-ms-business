import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('security_id')
      table.string('cc')
      table.string('names')
      table.string('surnames')
      table.string('country')
      table.string('department')
      table.string('city')
      table.string('address')
      table.string('phone_number')
      table.boolean('deceased')
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.integer('holder_id')
        .references('clients.id')
        .onDelete('CASCADE')
        .unsigned()
    })

    /* this.schema.alterTable(this.tableName, (table) => {
      table.integer('holder_id').references('clients.id').unsigned() //Referencia al titular
      //se hace referencia a la clave primaria de la tabla usuarios
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').unsigned() // eliminar el token si el usuario es eliminado
	  }) */
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

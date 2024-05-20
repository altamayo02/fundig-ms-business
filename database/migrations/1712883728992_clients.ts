import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.integer('user_id')
		table.string('cc')
		table.string('department')
		table.string('city')
		table.string('address')
		table.integer('phone_number')
		
		table.boolean('deceased') //fallecido
		table.string('holder_id').references('clients.id') //Referencia al titular
		//se hace referencia a la clave primaria de la tabla usuarios
		table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE') // eliminar el token si el usuario es eliminado

		
		table.timestamp('created_at', { useTz: true })
		table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

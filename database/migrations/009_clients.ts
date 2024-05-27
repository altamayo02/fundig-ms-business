import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
		table.increments('id')
		table.string('cc')
		table.string('department')
		table.string('city')
		table.string('address')
		table.string('phone_number')
		table.string("name")
		table.string("last_name")
		
		table.boolean('deceased') //fallecido

		
		table.timestamp('created_at', { useTz: true })
		table.timestamp('updated_at', { useTz: true })
    }).alterTable('clients', (table)=>{
		table.integer('holder_id').references('clients.id').unsigned() //Referencia al titular
		//se hace referencia a la clave primaria de la tabla usuarios
		table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').unsigned() // eliminar el token si el usuario es eliminado
	})
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import { HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Message from './Message'

export default class Chat extends Service {
  @hasMany(() => Message, {
	foreignKey: 'service_execution_id'
  })
  public messages: HasMany<typeof Message>
}

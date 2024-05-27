import { HasMany, hasMany, belongsTo, column, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'
import Client from './Client'
import { BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Chat extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public code : string

  @column()
  public client_id: number

  @belongsTo(() => Client, {
    foreignKey: 'client_id',
    })
    public client: BelongsTo<typeof Client>

    
  @hasMany(() => Message, {
	foreignKey: 'chat_id'
  })
  public messages: HasMany<typeof Message>
}

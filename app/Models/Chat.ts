import { belongsTo, column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import { BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public access_code: string

  @column()
  public deceased_id: number


  @belongsTo(() => Client, {
    foreignKey: 'deceased_id',
  })
  public deceased: BelongsTo<typeof Client>
    
  @hasMany(() => Message)
  public messages: HasMany<typeof Message>
}

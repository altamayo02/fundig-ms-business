import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'
import { DateTime } from 'luxon'

export default class ChatExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public access_code: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  // Chat execution and its messages stay,
  // even after service execution is deleted
  /* @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution> */
    
  @hasMany(() => Message)
  public messages: HasMany<typeof Message>
}

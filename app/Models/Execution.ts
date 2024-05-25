import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import Chat from './Chat'

export default class Execution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public timeStart: DateTime

  @column()
  public client_id: number

  @column()
  public chat_id: number

  @belongsTo(() => Client, {
    foreignKey:'client_id'
})
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Chat, {
    foreignKey:'chat_id'
  })
  public chat: BelongsTo<typeof Chat>
}

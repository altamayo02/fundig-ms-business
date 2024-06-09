import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import ChatExecution from './ChatExecution'

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userSecurityId: string

  @column()
  public content: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => ChatExecution)
  public chatExecution: BelongsTo<typeof ChatExecution>
}

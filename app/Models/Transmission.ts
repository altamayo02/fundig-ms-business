import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transmission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public startedAt: DateTime

  @column()
  public endedAt: DateTime

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

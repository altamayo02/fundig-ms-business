import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rating: number

  @column()
  public comment: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  // Review stays, even after client is deleted
  /* @belongsTo(() => Client)
  public client: BelongsTo<typeof Client> */
  
  @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution>
}

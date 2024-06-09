import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Client from './Client'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rating: number

  @column()
  public comment: string

  @column()
  public client_id: number

  @column()
  public service_execution_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  

  @belongsTo(() => Client, {
    foreignKey: `client_id`
  })
  public client: BelongsTo<typeof Client>
  
  @belongsTo(() => ServiceExecution, {
    foreignKey: `service_execution_id`
  })
  public service_execution: BelongsTo<typeof ServiceExecution>
}

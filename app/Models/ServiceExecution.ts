import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Room from 'App/Models/Room'
import Client from 'App/Models/Client'
import Service from 'App/Models/Service'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime

  @column()
  public pickupCity: string

  @column()
  public pickupAddress: string

  @column()
  public roomId: number

  @column()
  public clientId: number

  @column()
  public serviceId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Room)
  public room: BelongsTo<typeof Room>

  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Service)
  public service: BelongsTo<typeof Service>
}

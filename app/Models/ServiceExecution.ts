import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Review from './Review'
import Client from './Client'
import Service from './Service'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // Cost at the moment of the execution
  // ? - Maybe just leave that to Payments?
  @column()
  public cost: number

  @column()
  public note: string

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Client)
  public deceased: BelongsTo<typeof Client>

  @belongsTo(() => Service)
  public service: BelongsTo<typeof Service>

  @hasMany(() => Review)
  public reviews: HasMany<typeof Review>
}

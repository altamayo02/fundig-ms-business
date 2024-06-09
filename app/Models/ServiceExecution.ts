import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Review from './Review'

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


  @hasMany(() => Review)
  reviews: HasMany<typeof Review>
}

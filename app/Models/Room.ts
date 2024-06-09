import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import House from 'App/Models/House'
import ServiceExecution from './ServiceExecution'

export default class Room extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public rentCost: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => House)
  public house: BelongsTo<typeof House>

  @hasMany(() => ServiceExecution)
  public serviceExecutions: HasMany<typeof ServiceExecution>
}

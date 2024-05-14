import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import House from 'App/Models/House'
import ServiceExecution from 'App/Models/ServiceExecution'

export default class Room extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public houseId: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => House, {
    foreignKey: 'houseId',
  })
  public house: BelongsTo<typeof House>

  @hasMany(() => ServiceExecution, {
    foreignKey: 'roomId',
  })
  public serviceExecutions: HasMany<typeof ServiceExecution>
}

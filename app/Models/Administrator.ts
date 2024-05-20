// app/Models/Administrator.ts

import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import House from './House'
import { DateTime } from 'luxon'

export default class Administrator extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public securityId: string

  @column()
  public cc: number

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phoneNumber: number

  @column()
  public responsibilities: string

  @belongsTo(() => House, {
    foreignKey:'house_id'
  })
  public house: BelongsTo<typeof House>

  @column()
  public houseId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

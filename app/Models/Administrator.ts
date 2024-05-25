// app/Models/Administrator.ts

import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import House from './House'
import User from './User'
import { DateTime } from 'luxon'

export default class Administrator extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

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

  @column()
  public house_id: number

  @belongsTo(() => House, {
    foreignKey:'house_id'
  })
  public house: BelongsTo<typeof House>

  @belongsTo(() => User, {
    foreignKey:'user_id'
  })
  public user: BelongsTo<typeof User>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

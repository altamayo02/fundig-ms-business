// app/Models/Administrator.ts

import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Administrator extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // MongoDB reference pulled from MS-Security
  @column()
  public security_id: string

  @column()
  public cc: string
    
  @column()
  public names: string
  
  @column()
  public surnames: string

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phoneNumber: string

  @column()
  public responsibilities: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  // https://stackoverflow.com/q/45389747
  /* @belongsTo(() => House, {
    foreignKey: 'house_id'
  })
  public house: BelongsTo<typeof House> */
}

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import House from './House'

export default class Administrator extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // MongoDB reference pulled from MS-Security
  @column()
  public user_id: string

  @column()
  public cc: string

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phone_number: number

  @column()
  public responsibility_descr: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => House, {
	foreignKey: 'house_id'
  })
  public house: BelongsTo<typeof House>
}

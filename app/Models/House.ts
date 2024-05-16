import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Administrator from './Administrator'

export default class House extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public department: string
  
  @column()
  public city: string
  
  @column()
  public address: string
  
  @column()
  public phone_number: number

  @column()
  public is_main_house: boolean


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Administrator)
  public administrators: HasMany<typeof Administrator>
}

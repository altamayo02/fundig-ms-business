import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class House extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public country: string
  
  @column()
  public department: string
  
  @column()
  public city: string
  
  @column()
  public address: string
  
  @column()
  public phone_number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  /* @hasMany(() => Administrator)
  public administrators: HasMany<typeof Administrator>

  @hasMany(() => Handler)
  public handlers: HasMany<typeof Handler> */
}

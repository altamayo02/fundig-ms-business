import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Administrator from './Administrator'
import Handler from './Handler'
import Location from './Location'
import Room from './Room'

export default class House extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public address: string
  
  @column()
  public phone_number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @belongsTo(() => Location)
  public location: BelongsTo<typeof Location>

  @hasMany(() => Room)
  public rooms: HasMany<typeof Room>

  @hasMany(() => Administrator)
  public administrators: HasMany<typeof Administrator>

  @hasMany(() => Handler)
  public handlers: HasMany<typeof Handler>
}

import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Location from './Location'

export default class Handler extends BaseModel {
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
  public address: string

  @column()
  public phoneNumber: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Location)
  public residenceLocation: BelongsTo<typeof Location>
}

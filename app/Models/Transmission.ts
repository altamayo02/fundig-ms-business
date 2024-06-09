import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Camera from './Camera'

export default class Transmission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime

  @column()
  public camera_id: number    
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  

  @belongsTo(() => Camera, {
    foreignKey: 'camera_id'
  })
  public camera: BelongsTo<typeof Camera>
}

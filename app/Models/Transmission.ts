import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Execution from './Execution'
import Camera from './Camera'

export default class Transmission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public startedAt: DateTime

  @column()
  public endedAt: DateTime

  @column()
  public execution_id: DateTime

  @column()
  public camera_id: DateTime  

  @belongsTo(() => Execution, {
    foreignKey: 'execution_id'
  })
  public execution: BelongsTo<typeof Execution>
  
  @belongsTo(() => Camera, {
    foreignKey: 'camera_id'
  })
  public camera: BelongsTo<typeof Camera>
  
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, ManyToMany, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Camera from './Camera'
import Room from './Room'

export default class StreamExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number 
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution>

  @belongsTo(() => Room)
  public room: BelongsTo<typeof Room>

  @manyToMany(() => Camera, {
    pivotTable: 'transmissions',
  })
  cameras: ManyToMany<typeof Camera>
}

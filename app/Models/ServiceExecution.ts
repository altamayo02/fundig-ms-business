import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Room from 'App/Models/Room'
import Camera from './Camera'
import Client from './Client'
import { hasOne } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Execution from './Execution'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
public execution_id: number

@column()
public room_id: number

@column()
public service_id: number


  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime


  @manyToMany(() => Camera, {
    pivotTable: 'transmissions',
    pivotForeignKey: 'service_execution_id',
    pivotRelatedForeignKey: 'camera_id'
  })
  public cameras: ManyToMany<typeof Camera>

  @belongsTo(() => Execution, {
    foreignKey: 'execution_id'
  })
  public Execution: BelongsTo<typeof Execution>

  @belongsTo(() => Room, {
    foreignKey: 'room_id'
  })
  public room: BelongsTo<typeof Room>

  @belongsTo(() => Service, {
    foreignKey: 'service_id'
  })
  public service: BelongsTo<typeof Service>
}

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany, HasOne, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Room from 'App/Models/Room'
import Camera from './Camera'
import Client from './Client'
import { hasOne } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Stream from './Stream'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime


  @hasMany(() => Stream, {
    foreignKey: 'stream_id',
  })
  public stream: HasMany<typeof Stream>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @manyToMany(() => Camera, {
    pivotTable: 'transmissions',
    pivotForeignKey: 'service_execution_id',
    pivotRelatedForeignKey: 'camera_id'
  })
  public cameras: ManyToMany<typeof Camera>

  @belongsTo(() => Client, {
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Room, {
    foreignKey: 'room_id'
  })
  public room: BelongsTo<typeof Room>

  @belongsTo(() => Service, {
    foreignKey: 'service_id'
  })
  public service: BelongsTo<typeof Service>
}

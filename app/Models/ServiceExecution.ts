import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Room from 'App/Models/Room'
import Camera from './Camera'
import Client from './Client'
import { hasOne } from '@ioc:Adonis/Lucid/Orm'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Room)
  public room: BelongsTo<typeof Room>

  @manyToMany(() => Camera, {
    pivotTable: 'transmissions',
    pivotForeignKey: 'service_execution_id',
    pivotRelatedForeignKey: 'camera_id'
  })
  public cameras: ManyToMany<typeof Camera>

  @hasOne(() => Client, {
    foreignKey: 'client_id'
  })
  public client: HasOne<typeof Client>
}

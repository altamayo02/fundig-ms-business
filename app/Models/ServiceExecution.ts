import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Camera from './Camera'
import Service from './Service'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // ? - Relate ServiceExecutions to Handlers

  @column.dateTime()
  public startedAt: DateTime

  @column.dateTime()
  public endedAt: DateTime

  @column()
  public service_id: number

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

  @belongsTo(() => Service, {
    foreignKey: 'service_id'
  })
  public service: BelongsTo<typeof Service>
}

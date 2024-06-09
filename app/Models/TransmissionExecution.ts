import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, ManyToMany, belongsTo, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Camera from './Camera'
import Handler from './Handler'

export default class TransmissionExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number 
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution>

  // FIXME - Many to many
  @hasMany(() => Handler)
  public handlers: HasMany<typeof Handler>

  @manyToMany(() => Camera, {
    pivotTable: 'broadcasts',
  })
  cameras: ManyToMany<typeof Camera>
}

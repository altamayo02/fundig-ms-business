import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Handler from './Handler'
import ServiceExecution from './ServiceExecution'

export default class PreparationExecution extends BaseModel {
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
}

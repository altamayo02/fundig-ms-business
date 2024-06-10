import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Location from './Location'
import ServiceExecution from './ServiceExecution'

export default class TransportExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  

  @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution>

  @belongsTo(() => Location)
  public from: BelongsTo<typeof Location>

  @belongsTo(() => Location)
  public to: BelongsTo<typeof Location>
}

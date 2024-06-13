import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Location from './Location'

export default class ThanatopraxyExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public embalmed: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => ServiceExecution)
  public serviceExecution: BelongsTo<typeof ServiceExecution>

  @belongsTo(() => Location)
  public location: BelongsTo<typeof Location>
}

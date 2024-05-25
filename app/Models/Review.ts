import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import User from './User'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rating:number

  @column()
  public comment:string

  @column()
  public user_id: number

  @column()
  public service_execution_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => ServiceExecution, { foreignKey: `service_execution_id` })
  public service_execution: BelongsTo<typeof ServiceExecution>;
  
  @belongsTo(() => User, { foreignKey: `user_id` })
  public user: BelongsTo<typeof User>;
}

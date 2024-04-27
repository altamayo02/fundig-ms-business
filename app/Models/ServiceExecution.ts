import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Review from './Review'

export default class ServiceExecution extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public started_at: DateTime

  @column()
  public ended_at: DateTime

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Review, {
	foreignKey: 'service_execution_id'
  })
  public reviews: HasMany<typeof Review>
}

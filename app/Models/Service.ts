import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from 'App/Models/ServiceExecution'
import ServicePlan from 'App/Models/PlanService'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public status: boolean

  @column()
  public cost: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ServiceExecution)
  public serviceExecutions: HasMany<typeof ServiceExecution>

  @hasMany(() => ServicePlan)
  public servicePlans: HasMany<typeof ServicePlan>
}

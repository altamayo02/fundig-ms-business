import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Subscription from 'App/Models/Subscription'
import PlanService from 'App/Models/PlanService'

export default class Plan extends BaseModel {
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

  @column()
  public type: number

  @column()
  public amoiunBeneficiares: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Subscription, {
    foreignKey: 'planId',
  })
  public subscriptions: HasMany<typeof Subscription>

  @hasMany(() => PlanService, {
    foreignKey: 'planId',
  })
  public planServices: HasMany<typeof PlanService>
}

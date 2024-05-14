import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Plan from 'App/Models/Plan'
import Subscription from 'App/Models/Subscription'

export default class PlanService extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public planId: number

  @column()
  public subscriptionId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Plan, {
    foreignKey: 'planId',
  })
  public plan: BelongsTo<typeof Plan>

  @belongsTo(() => Subscription, {
    foreignKey: 'subscriptionId',
  })
  public subscription: BelongsTo<typeof Subscription>
}

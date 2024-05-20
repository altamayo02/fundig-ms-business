import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'
import Payment from 'App/Models/Payment'
import Plan from 'App/Models/Plan'

export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: boolean

  @column.dateTime()
  public endAt: DateTime

  @column()
  public paymentFrequency: number

  @column()
  public planId: number

  @column()
  public clientId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Client, {
    foreignKey: 'client_id'
  })
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Plan, {
    foreignKey: 'plan_id'
  })
  public plan: BelongsTo<typeof Plan>

  @hasMany(() => Payment, {
    foreignKey: 'subscription_id',
  })
  public payments: HasMany<typeof Payment>
}

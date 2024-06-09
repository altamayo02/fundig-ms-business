import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Client from 'App/Models/Client'
import Payment from 'App/Models/Payment'
import Plan from 'App/Models/Plan'

export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  /*
    ACTIVE
    SUSPENDED
    CANCELLED
  */
  @column()
  public status: string

  @column()
  public paymentsStreak: number

  @column()
  public plan_id: number

  @column()
  public client_id: number

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
    foreignKey: 'payment_id',
  })
  public payments: HasMany<typeof Payment>
}

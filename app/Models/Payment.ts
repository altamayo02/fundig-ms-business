import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Subscription from 'App/Models/Subscription'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public amount: number

  @column()
  public currency: string

  @column()
  public status: string

  @column.dateTime()
  public paidAt: DateTime

  @column()
  public ePaycoMetaData: string

  @column()
  public method: string

  @column()
  public subscription_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @belongsTo(() => Subscription, {
    foreignKey: 'subscription_id',
  })
  public subscription: BelongsTo<typeof Subscription>
}

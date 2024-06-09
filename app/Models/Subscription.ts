import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Payment from 'App/Models/Payment'

export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  /*
    ACTIVE, SUSPENDED, CANCELLED
  */
  @column()
  public status: string

  @column()
  public paymentsStreak: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Payment)
  public payments: HasMany<typeof Payment>
}

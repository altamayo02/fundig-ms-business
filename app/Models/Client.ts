// app/Models/Client.ts

import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Subscription from './Subscription'
import { DateTime } from 'luxon'
import User from './User'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column()
  public cc: number

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phoneNumber: number

  @column()
  public deceased: boolean

  @column()
  public holderId: number // ID del titular

  @hasMany(() => ServiceExecution)
  public serviceExecutions: HasMany<typeof ServiceExecution>

  @hasMany(() => Subscription)
  public subscriptions: HasMany<typeof Subscription>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof User>
  
  
}

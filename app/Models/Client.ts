// app/Models/Client.ts

import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import ServiceExecution from './ServiceExecution'
import Subscription from './Subscription'
import { DateTime } from 'luxon'
import User from './User'
import Service from './Service'
import Plan from './Plan'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public securityId: string

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


  @hasMany(() => Client, {
	foreignKey: 'beneficiary_id'
  })
  public clients: HasMany<typeof Client>

  // ID Titular
  @belongsTo(() => Client, {
	foreignKey: 'holder_id',
  })
  public client: BelongsTo<typeof Client>

  @manyToMany(() => Service, {
	pivotTable: 'service_executions',
	pivotForeignKey: 'client_id',
	pivotRelatedForeignKey: 'service_id'
  })
  public services: ManyToMany<typeof Service>
  
  @manyToMany(() => Plan, {
	pivotTable: 'subscriptions',
	pivotForeignKey: 'client_id',
	pivotRelatedForeignKey: 'plan_id'
  })
  public plans: ManyToMany<typeof Plan>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  public user: BelongsTo<typeof User>
  
  
}

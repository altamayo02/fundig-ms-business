// app/Models/Client.ts

import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Service from './Service'
import Plan from './Plan'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  // MongoDB reference pulled from MS-Security
  @column()
  public security_id: string

  @column()
  public cc: string
  
  @column()
  public names: string
  
  @column()
  public surnames: string

  @column()
  public country: string

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phoneNumber: string

  @column()
  public deceased: boolean

  @column()
  public holder_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  // Beneficiarios
  @hasMany(() => Client, {
	  foreignKey: 'beneficiary_id'
  })
  public clients: HasMany<typeof Client>

  // Titular
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
}

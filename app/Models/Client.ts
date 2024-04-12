import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, ManyToMany, belongsTo, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Plan from './Plan'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  // MongoDB reference pulled from MS-Security
  @column()
  public user_id: string

  @column()
  public cc: string

  @column()
  public department: string

  @column()
  public city: string

  @column()
  public address: string

  @column()
  public phone_number: number

  @column()
  public deceased: boolean

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Client, {
	foreignKey: 'client_id'
  })
  public clients: HasMany<typeof Client>

  @belongsTo(() => Client, {
	foreignKey: 'client_id'
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

// app/Models/Client.ts

import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Plan from './Plan'
import Review from './Review'
import Location from './Location'

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
  public address: string

  @column()
  public phoneNumber: string

  @column()
  public deceased: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  // Titular tiene beneficiarios
  @belongsTo(() => Client)
  public client: BelongsTo<typeof Client>

  @belongsTo(() => Location)
  public residenceLocation: BelongsTo<typeof Location>

  // Beneficiarios tienen un titular
  @hasMany(() => Client, {
	  foreignKey: 'holder_id'
  })
  public clients: HasMany<typeof Client>

  // FIXME - What for?
  /* @hasMany(() => ServiceExecution, {
    foreignKey: 'deceased_id'
  })
  public serviceExecutions: HasMany<typeof ServiceExecution> */

  @hasMany(() => Review, {
    foreignKey: 'reviewer_id'
  })
  public reviews: HasMany<typeof Review>
  
  @manyToMany(() => Plan, {
    pivotTable: 'subscriptions',
    /* pivotForeignKey: 'client_id',
    pivotRelatedForeignKey: 'plan_id' */
  })
  public plans: ManyToMany<typeof Plan>
}

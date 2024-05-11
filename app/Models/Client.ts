import { BelongsTo, HasMany, ManyToMany, belongsTo, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Service from './Service'
import Plan from './Plan'
import User from './User'

export default class Client extends User {
  @column()
  public deceased: boolean


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

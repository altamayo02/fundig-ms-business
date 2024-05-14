import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public status: boolean

  @column()
  public cost: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Service , {
    pivotTable: 'PlanService', //nombre de la tabla pivote
    pivotForeignKey: 'service_id', //nombre de la llave foranea de la tabla pivote
    pivotRelatedForeignKey: 'plan_id',
    pivotColumns : ['id']
  })
  public plans: ManyToMany<typeof Service>
  }

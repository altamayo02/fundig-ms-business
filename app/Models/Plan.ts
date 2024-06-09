import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Service from './ServiceExecution'

export default class Plan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string
  
  @column()
  public cost: number
  
  @column()
  public isOffered: boolean

  @column()
  public amountBenefited: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @manyToMany(() => Service, {
    pivotTable: 'plan_services',
    /* pivotForeignKey: 'service_id',
    pivotRelatedForeignKey: 'plan_id' */
  })
  public services: ManyToMany<typeof Service>
}

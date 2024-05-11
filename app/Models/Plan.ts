import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Plan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public description: string

  @column()
  public status: boolean
    
  @column()
  public cost: number
  
  @column()
  public type: number
  
  @column()
  public amountBeneficiares: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Plan , { 
    pivotTable: 'PlanService', //nombre de la tabla pivote
    pivotForeignKey: 'plan_id', //nombre de la llave foranea de la tabla pivote
    pivotRelatedForeignKey: 'service_id',
    pivotColumns : ['id'] 
  })
  public services: ManyToMany<typeof Plan>
}

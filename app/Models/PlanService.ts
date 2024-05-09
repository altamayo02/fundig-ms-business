import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Plan from './Plan'
import Service from './Service'


export default class PlanService extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public plan_id: number 

  @column()
  public service_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class Service extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  // Cost at the very moment
  @column()
  public cost: number

  @column()
  public isOffered: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @manyToMany(() => Client, {
    pivotTable: 'service_executions',
    pivotRelatedForeignKey: 'deceased_id'
  })
  public clients: ManyToMany<typeof Client>
}

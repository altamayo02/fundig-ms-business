import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Stream from './Stream'

export default class Camara extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ancho: number

  @column()
  public alto: number


  @hasMany(() => Stream, {
    foreignKey: 'streamId',
  })
  public stream: HasMany<typeof Stream>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Camara from './Camara';
import ServiceExecution from './ServiceExecution';

export default class Stream extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fechaInicio:DateTime;

  @column()
  public fechaFin:DateTime;

  @column()
  public camaraId:number

  @column()
  public serviceExecutionId: number

  @belongsTo(() => Camara, {
    foreignKey: 'camaraId',
  })
  public camara: BelongsTo<typeof Camara>

  @belongsTo(() => ServiceExecution, {
    foreignKey:'serviceExecutionId',
  }
  )
  public serviceExecution: BelongsTo<typeof ServiceExecution>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

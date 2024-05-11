import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import House from './House'
import User from './User'

export default class Administrator extends User {
  @column()
  public responsibilities: string


  @belongsTo(() => House, {
	foreignKey: 'house_id'
  })
  public house: BelongsTo<typeof House>
}

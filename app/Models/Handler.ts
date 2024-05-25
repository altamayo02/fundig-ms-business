import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import House from './House'
import User from './User'

export default class Handler extends BaseModel{

    @column({ isPrimary: true })
    public id: number
  
    @column()
    public user_id: string
  
    @column()
    public cc: number
  
    @column()
    public department: string
  
    @column()
    public city: string
  
    @column()
    public address: string
  
    @column()
    public phoneNumber: number
  
    @column()
    public deceased: boolean

    @column()
    public house_id: number
    
    @belongsTo(() => House, {
        foreignKey:'house_id'
      })
      public house: BelongsTo<typeof House>

      @belongsTo(() => User, {
        foreignKey:'user_id'
      })
      public user: BelongsTo<typeof User>
}

import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import House from './House'

export default class Handler extends BaseModel{

    @column({ isPrimary: true })
    public id: number
  
    @column()
    public userId: string
  
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
    public houseId: number
    
    @belongsTo(() => House, {
        foreignKey:'houseId'
      })
      public house: BelongsTo<typeof House>
}

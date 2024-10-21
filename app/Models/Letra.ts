import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'

export default class Letra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @column()
  public cancionId: number

  @belongsTo(() => Cancion)
  public cancion: BelongsTo<typeof Cancion>
}

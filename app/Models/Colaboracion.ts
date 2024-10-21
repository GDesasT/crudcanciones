import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'
import Artista from 'App/Models/Artista'

export default class Colaboracion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cancionId: number

  @column()
  public artistaId: number

  @belongsTo(() => Cancion)
  public cancion: BelongsTo<typeof Cancion>

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>
}

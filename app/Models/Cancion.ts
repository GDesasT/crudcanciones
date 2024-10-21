import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Artista from 'App/Models/Artista'
import Album from 'App/Models/Album'
import Genero from 'App/Models/Genero'
import Colaboracion from 'App/Models/Colaboracion'
import Letra from 'App/Models/Letra'
import Playlist from 'App/Models/Playlist'
import Productor from 'App/Models/Productor'

export default class Cancion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public artistaId: number

  @column()
  public albumId: number | null

  @column()
  public generoId: number

  @column()
  public productorId: number | null

  @column()
  public duracion: number

  @column()
  public fechaLanzamiento: Date

  @belongsTo(() => Artista)
  public artista: BelongsTo<typeof Artista>

  @belongsTo(() => Album)
  public album: BelongsTo<typeof Album>

  @belongsTo(() => Genero)
  public genero: BelongsTo<typeof Genero>

  @belongsTo(() => Productor)
  public productor: BelongsTo<typeof Productor>

  @hasMany(() => Colaboracion)
  public colaboraciones: HasMany<typeof Colaboracion>

  @hasOne(() => Letra)
  public letra: HasOne<typeof Letra>

  @manyToMany(() => Playlist, {
    pivotTable: 'cancion_playlist',
    pivotForeignKey: 'cancion_id',
    pivotRelatedForeignKey: 'playlist_id',
  })
  public playlists: ManyToMany<typeof Playlist>
}

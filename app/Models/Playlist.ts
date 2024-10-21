import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'

export default class Playlist extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @manyToMany(() => Cancion, {
    pivotTable: 'cancion_playlist',
    pivotForeignKey: 'playlist_id',
    pivotRelatedForeignKey: 'cancion_id',
  })
  public canciones: ManyToMany<typeof Cancion>
}

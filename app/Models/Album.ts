import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'

export default class Album extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public fechaLanzamiento: Date | null

  @hasMany(() => Cancion)
  public canciones: HasMany<typeof Cancion>
}

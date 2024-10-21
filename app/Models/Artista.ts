import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'
import Colaboracion from 'App/Models/Colaboracion'

export default class Artista extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public fechaNacimiento: Date | null

  @hasMany(() => Cancion)
  public canciones: HasMany<typeof Cancion>

  @hasMany(() => Colaboracion)
  public colaboraciones: HasMany<typeof Colaboracion>
}

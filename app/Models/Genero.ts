import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @hasMany(() => Cancion)
  public canciones: HasMany<typeof Cancion>
}

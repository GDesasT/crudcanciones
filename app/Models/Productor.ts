import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cancion from 'App/Models/Cancion'

export default class Productor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public estudio: string | null

  @hasMany(() => Cancion)
  public canciones: HasMany<typeof Cancion>
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Artista from 'App/Models/Artista'

export default class ArtistaSeeder extends BaseSeeder {
  public async run () {
    await Artista.createMany([
      { nombre: 'Álvaro Díaz', fechaNacimiento: new Date('1997-10-25') },
      { nombre: 'Kendrick Lamar', fechaNacimiento: new Date('1987-06-17') },
      { nombre: 'Metro Boomin', fechaNacimiento: new Date('1993-06-16') },
    ])
  }
}

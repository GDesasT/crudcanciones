import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genero from 'App/Models/Genero'

export default class GeneroSeeder extends BaseSeeder {
  public async run () {
    await Genero.createMany([
      { nombre: 'Hip-Hop' },
      { nombre: 'R&B' },
      { nombre: 'Rap' },
      { nombre: 'Trap' },
    ])
  }
}

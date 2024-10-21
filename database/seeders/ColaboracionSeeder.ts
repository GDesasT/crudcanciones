import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Colaboracion from 'App/Models/Colaboracion'

export default class ColaboracionSeeder extends BaseSeeder {
  public async run () {
    await Colaboracion.createMany([
      { cancionId: 1, artistaId: 2 }, // 'Tú y Yo' de Álvaro Díaz con Kendrick Lamar
      { cancionId: 2, artistaId: 1 }, // 'HUMBLE.' de Kendrick Lamar con Álvaro Díaz
      { cancionId: 4, artistaId: 3 }, // 'Overdue' de Metro Boomin
    ])
  }
}

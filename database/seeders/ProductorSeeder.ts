import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Productor from 'App/Models/Productor'

export default class ProductorSeeder extends BaseSeeder {
  public async run () {
    await Productor.createMany([
      { nombre: 'Metro Boomin', estudio: 'Boominati Worldwide' },
      { nombre: 'Tay Keith', estudio: 'Gotta Get It' },
      { nombre: 'Boi-1da', estudio: 'Boi-1da Productions' },
    ])
  }
}

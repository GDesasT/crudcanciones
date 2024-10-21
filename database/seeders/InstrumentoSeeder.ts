import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Instrumento from 'App/Models/Instrumento'

export default class InstrumentoSeeder extends BaseSeeder {
  public async run () {
    await Instrumento.createMany([
      { nombre: 'Guitarra', tipo: 'Cuerda' },
      { nombre: 'Batería', tipo: 'Percusión' },
      { nombre: 'Piano', tipo: 'Teclado' },
      { nombre: 'Sintetizador', tipo: 'Electrónico' },
    ])
  }
}

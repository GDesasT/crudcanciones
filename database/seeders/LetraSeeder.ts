// database/seeders/LetraSeeder.ts

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Letra from 'App/Models/Letra'

export default class LetraSeeder extends BaseSeeder {
  public async run () {
    await Letra.createMany([
      { cancionId: 1, contenido: 'Letra de Tú y Yo...' }, // 'Tú y Yo'
      { cancionId: 2, contenido: 'Letra de HUMBLE...' },  // 'HUMBLE.'
      { cancionId: 3, contenido: 'Letra de SICKO MODE...' }, // 'SICKO MODE'
      { cancionId: 4, contenido: 'Letra de Overdue...' }, // 'Big Poppa'
    ])
  }
}

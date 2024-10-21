import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cancion from 'App/Models/Cancion'

export default class CancionSeeder extends BaseSeeder {
  public async run () {
    await Cancion.createMany([
      { titulo: 'Tú y Yo', artistaId: 1, albumId: 1, duracion: 210, fechaLanzamiento: new Date('2021-05-13') },
      { titulo: 'HUMBLE.', artistaId: 2, albumId: 2, duracion: 177, fechaLanzamiento: new Date('2017-04-14') },
      { titulo: 'SICKO MODE', artistaId: 2, albumId: 3, duracion: 320, fechaLanzamiento: new Date('2018-08-03') },
      { titulo: 'Overdue', artistaId: 1, albumId: 1, duracion: 240, fechaLanzamiento: new Date('2021-05-14') },
    ])
  }
}

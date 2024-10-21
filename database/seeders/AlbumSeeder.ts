import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Album from 'App/Models/Album'

export default class AlbumSeeder extends BaseSeeder {
  public async run () {
    await Album.createMany([
      { titulo: 'Felicilandia', fechaLanzamiento: new Date('2021-05-14') }, // Álvaro Díaz
      { titulo: 'good kid, m.A.A.d city', fechaLanzamiento: new Date('2012-10-22') }, // Kendrick Lamar
      { titulo: 'DAMN.', fechaLanzamiento: new Date('2017-04-14') }, // Kendrick Lamar
      { titulo: 'Not All Heroes Wear Capes', fechaLanzamiento: new Date('2018-11-02') }, // Metro Boomin
      { titulo: 'Savage Mode II', fechaLanzamiento: new Date('2020-10-02') }, // Metro Boomin
    ])
  }
}

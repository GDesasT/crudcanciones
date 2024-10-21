import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      {
        nombre: 'Usuario 1',
        email: 'usuario1@example.com',
        password: 'password1',
      },
      {
        nombre: 'Usuario 2',
        email: 'usuario2@example.com',
        password: 'password2',
      },
      {
        nombre: 'Usuario 3',
        email: 'usuario3@example.com',
        password: 'password3',
      },
    ])
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class AuthController {
  // Método para iniciar sesión
    public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.all()
    const usuario = await Usuario.findBy('email', email)

    // Verificar credenciales
    if (!usuario || !(await usuario.verifyPassword(password))) {
        return response.badRequest('Invalid credentials')
    }

    // Generar token
    const token = await auth.use('api').generate(usuario)

    return { token }
    }

  // Método para obtener el usuario autenticado
    public async me({ auth }: HttpContextContract) {
    return auth.user
    }
}

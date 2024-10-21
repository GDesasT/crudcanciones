import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cancion from 'App/Models/Cancion'

export default class CancionController {
  public async index({ response }: HttpContextContract) {
    const canciones = await Cancion.all()
    return response.json(canciones)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['titulo', 'artistaId', 'albumId', 'duracion', 'generoId', 'fechaLanzamiento'])

    const nuevaCancion = await Cancion.create(data)
    return response.created(nuevaCancion)
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const cancion = await Cancion.findOrFail(params.id)
      return response.json(cancion)
    } catch (error) {
      return response.status(404).json({ message: 'Canción no encontrada' })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    try {
      const cancion = await Cancion.findOrFail(params.id)
      const data = request.only(['titulo', 'artistaId', 'albumId', 'duracion', 'generoId', 'fechaLanzamiento'])

      cancion.merge(data)
      await cancion.save()

      return response.json(cancion)
    } catch (error) {
      return response.status(404).json({ message: 'Canción no encontrada' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const cancion = await Cancion.findOrFail(params.id)
      await cancion.delete()

      return response.status(200).json({ message: 'Canción eliminada correctamente' })
    } catch (error) {
      return response.status(404).json({ message: 'Canción no encontrada' })
    }
  }
}

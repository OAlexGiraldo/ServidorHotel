import ServicioHabitacion from '../Services/ServicioHabitacion.js';

export class ControladorHabitacion {
  constructor() {}

  //analiza y responde, las rutas necesitan este archivo
  async buscarHabitaciones(request, response) {
    let objetoServicioHabitacion = new ServicioHabitacion();
    // response.send("Estoy buscando habitaciones desde el controlador")
    try {
      response.status(200).json({
        mensaje: 'Exito en la consulta',
        datos: await objetoServicioHabitacion.buscarHabitaciones(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async buscarHabitacionPorId(request, response) {
    // response.send('Estoy buscando una habitacion por id desde controlador');
    // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
    let id = request.params.idHabitacion;
    let objetoServicioHabitacion = new ServicioHabitacion();
    try {
      response.status(200).json({
        mensaje: 'Exito en la consulta ' + id,
        datos: await objetoServicioHabitacion.buscarHabitacionPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async registrarHabitacion(request, response) {
    // response.send('Estoy agregando una habitacion desde el controlador');
    // quiero Guardar datos en la BD, NO VIAJAN como params por URL, Viajan por el body por eso no tiene : van por el request

    let datosHabitacion = request.body;
    let objetoServicioHabitacion = new ServicioHabitacion();

    try {
      if (datosHabitacion.numeroMaximoPersonas < 8) {
        await objetoServicioHabitacion.agregarHabitacionEnBd(datosHabitacion);
        response.status(200).json({
          mensaje: 'Exito en el registro de habitación ',
          datos: null,
        });
      } else {
        response.status(400).json({
          mensaje: 'error en el número de personas',
          datos: null,
        });
      }
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async editarHabitacion(request, response) {
    // response.send('Estoy editando habitacion desde el controlador');
    let id = request.params.idHabitacion;
    let datosHabitacion = request.body;
    let objetoServicioHabitacion = new ServicioHabitacion();

    try {
      await objetoServicioHabitacion.editarHabitacion(id, datosHabitacion);

      response.status(200).json({
        mensaje: 'Exito editando la habitacion con  id ' + id,
        datos: null,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async eliminaHabitacion(request, response) {
    // response.send('Estoy buscando una Reservas por id desde controlador');
    // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
    let id = request.params.idHabitacion;
    let objetoServicioHabitacion = new ServicioHabitacion();
    try {
      await objetoServicioHabitacion.eliminaHabitacion(id),
        response.status(200).json({
          mensaje: 'Exito eliminando ' + id,
          datos: null,
        });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }
}

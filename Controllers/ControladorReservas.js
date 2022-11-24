import ServicioHabitacion from '../Services/ServicioHabitacion.js';
import ServicioReserva from '../Services/ServiciosReservas.js';
export class ControladorReservas {
  constructor() {}

  //analiza y responde, las rutas necesitan este archivo
  async buscarReservas(request, response) {
    // response.send("Estoy buscando Reservas desde el controlador")

    let objetoServicioReserva = new ServicioReserva();
    // response.send("Estoy buscando reservaes desde el controlador")
    try {
      response.status(200).json({
        mensaje: 'Exito en la consulta',
        datos: await objetoServicioReserva.buscarReservas(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async buscarReservaPorId(request, response) {
    // response.send('Estoy buscando una Reservas por id desde controlador');
    // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
    let id = request.params.idReserva;
    let objetoServicioReserva = new ServicioReserva();
    try {
      response.status(200).json({
        mensaje: 'Exito en la consulta ' + id,
        datos: await objetoServicioReserva.buscarReservaPorId(id),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async registrarReserva(request, response) {
    // response.send('Estoy agregando una Reservas desde el controlador');

    //debo validar que exista habitacion
    let datosReserva = request.body;
    //llamando al servicio de habitacion

    let objetoServicioHabitacion = new ServicioHabitacion();
    let objetoServicioReserva = new ServicioReserva();

    try {
      let habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion);

      if (habitacion) {
        // Validar la cantidad de personas debe ser menor o igual a la maxima permitida en esta habitacion
        if (datosReserva.numeroAdultos + datosReserva.numeroNinos > habitacion.numeroMaximoPersonas){
          response.status(400).json({
            mensaje: 'La cantidad de personas (' + (datosReserva.numeroAdultos + datosReserva.numeroNinos) + ') supera la maxima permitida para esta habitacion: ' + habitacion.numeroMaximoPersonas,
            datos: null,
          });
        } else {
          let numeroNoches = (new Date(datosReserva.fechaSalida) - new Date(datosReserva.fechaIngreso)) / (1000 * 3600 * 24) - 1;
          datosReserva.costoReserva = habitacion.valorNoche * numeroNoches;
  
          await objetoServicioReserva.agregarReservaEnBd(datosReserva);
          response.status(200).json({
            mensaje: 'Exito en el registro de reserva ',
            datos: null,
          });
        }
      } else {
        response.status(400).json({
          mensaje: 'la habitacion no esta disponible',
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

  async editarReserva(request, response) {
    //recibiendo el id como parametro
    let id = request.params.idReserva;

     //recibir los datos con los que voy a editar (BODY)
    let datosReserva = request.body;

    //Llamo al servicio reserva
    let objetoServicioReserva = new ServicioReserva();

    try {
      await objetoServicioReserva.editarReserva(id, datosReserva);

      response.status(200).json({
        mensaje: 'Exito editando la reserva con  id ' + id,
        datos: null,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }

  async eliminaReserva(request, response) {
    // response.send('Estoy buscando una Reservas por id desde controlador');
    // una peticion tiene los parametros que van por el body, y el id los cuales viaja por URL
    let id = request.params.idReserva;
    let objetoServicioReserva = new ServicioReserva();
    try {
      await objetoServicioReserva.eliminaReserva(id),
      response.status(200).json({
        mensaje: 'Exito eliminando ' + id,
        datos:null
      });
    } catch (error) {
      response.status(400).json({
        mensaje: 'Error en la consulta ' + error,
        datos: null,
      });
    }
  }
}
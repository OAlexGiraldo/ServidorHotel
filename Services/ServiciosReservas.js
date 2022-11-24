import { modeloReserva } from '../Models/ModeloReserva.js';

class ServicioReserva {
  //aqui programo metodos para cada una de las consultas que hago en bd

  async buscarReservas() {
    let reservas = await modeloReserva.find();
    return reservas;
  }
  async buscarReservaPorId(id) {
    let reserva = await modeloReserva.findById(id);
    return reserva;
  }
  async agregarReservaEnBd(datos) {
    let datosValidados = new modeloReserva(datos);
    return await datosValidados.save();
  }
  async editarReserva(id, datosEditar) {
    return await modeloReserva.findByIdAndUpdate(id, datosEditar);
  }
  async eliminaReserva(id) {
    return await modeloReserva.findByIdAndUpdate(id);
  }
}

export default ServicioReserva;
import { modeloHabitacion } from '../Models/ModelosHabitacion.js';

class ServicioHabitacion {
  //aqui programo metodos para cada una de las consultas que hago en bd

  async buscarHabitaciones() {
    let habitaciones = await modeloHabitacion.find();
    return habitaciones;
  }
  async buscarHabitacionPorId(id) {
    let habitacion = await modeloHabitacion.findById(id);
    return habitacion;
  }
  async agregarHabitacionEnBd(datos) {
    let datosValidados = new modeloHabitacion(datos);
    return await datosValidados.save();
  }
  async editarHabitacion(id, datosEditar) {
    return await modeloHabitacion.findByIdAndUpdate(id, datosEditar);
  }
  async eliminaHabitacion(id) {
    return await modeloHabitacion.findByIdAndDelete(id);
  }
}

export default ServicioHabitacion;
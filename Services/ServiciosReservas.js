import { modeloReservas } from "../Models/ModeloReserva.js";

export class ServicioReservas{

   //Aquí programo métodos, para cada una de las consultas que quiero hacer en bd 

   async buscarReservas(){
    let habitaciones = await modeloReservas.find()
    return habitaciones 
}

async buscarReservaPorId(idr){
    let reserva = await modeloReservas.findById(idr)
    return reserva
}

async agregarReservaEnBD(datosreserva){
    let datosValidados = new modeloReservas(datosreserva)
    return await datosValidados.save()
}

async editarReserva(id,datos){

    return await modeloReservas.findByIdAndUpdate(id,datos)
}

async borrarReserva(id){
    return await modeloReservas.findByIdAndDelete(id)
}
}
import {modeloReserva } from '../Models/ModeloReserva.js'

export class ServicioReserva{

    //Aquí programo métodos, para cada una de las consultas que quiero hacer en bd 

    async buscarReservas(){
        let habitaciones = await modeloReserva.find()
        return habitaciones 
    }

    async buscarReservaPorId(idr){
        let reserva = await modeloReserva.findById(idr)
        return reserva
    }

    async agregarReservaEnBD(datosreserva){
        let datosValidados = new modeloReserva(datosreserva)
        return await datosValidados.save()
    }

    async editarReserva(id,datos){

        return await modeloReserva.findByIdAndUpdate(id,datos)
    }

    async borrarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}
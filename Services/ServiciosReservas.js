import { modeloReservas } from "../Models/ModeloReserva.js";

export class ServicioReservas{

    //Aqui van los metodo para cada una de las consutas que queremos realizar 
    async buscarReservas(){
        let Reservas=await modeloReservas.find()
        return Reservas
    }

    async buscarReservaid(id){
        let Reservasid=await modeloReservas.findById(id)
        return Reservasid
    }

   async agregarReservasbd(datos){
        let datoschecked=new modeloReservas(datos)
        return await datoschecked.save()
    }

    async editarReservas(id,datos){

        return await modeloReservas.findByIdAndUpdate(id,datos)
    }
    async eliminarReservas(id){
        return await modeloReservas.findByIdAndDelete(id)
    }

}
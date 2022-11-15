import { modeloHabitacion } from "../Models/ModelosHabitacion.js";

export class ServicioHabitacion{

    //Aqui van los metodo para cada una de las consutas que queremos realizar 
    async buscarHabitaciones(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarHabitacionesid(id){
        let habitacionid=await modeloHabitacion.findById(id)
        return habitacionid
    }

   async agregarHabitacionbd(datos){
        let datoschecked=new modeloHabitacion(datos)
        return await datoschecked.save()
    }

    async editarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    
}
import {modeloHabitacion} from '../Models/ModelosHabitacion.js'

export class ServicioHabitacion{

    //Aquí programo métodos, para cada una de las consultas que quiero hacer en bd 

    async buscarHabitaciones(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones 
    }

    async buscarHabitacionPorId(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }

    async agregarHabitacionEnBD(datos){
        let datosValidados = new modeloHabitacion(datos)
        return await datosValidados.save()
    }

    async editarHabitacion(id,datos){

        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }

}

//recibir peticiones,logica de negocio,envio de respuestas
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

     constructor(){}

    async buscarHabitaciones(request,response){
        try{
            let objetoServicioHabitacion=new ServicioHabitacion()
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones()
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy buscando habitaciones desde el controlador")
    }

    async buscarHabitacionPorId(request,response){
        //viajan por la url de la peticion
        let id=request.params.idHabitacion 
        let objetoServicioHabitacionid=new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta "+id,
                "datos":await objetoServicioHabitacionid.buscarHabitacionesid(id)
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy buscando una habitacion por id desde el controlador")
    }

    async registrarHabitacion(request,response){
        //viajan por el bode de la peticion
        let datoshabitacion=request.body
        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            console.log(datoshabitacion.numeroMaximoPersonas)
            if(datoshabitacion.numeroMaximoPersonas<8){
                await objetoServicioHabitacion.agregarHabitacionbd(datoshabitacion)
                response.status(200).json({
                    "mensaje":"Exito agregando",
                    "datos":null
                })

            }else{
                response.status(400).json({
                    "mensaje":"No caba tante chinche",
                    "datos":null
            })
            
            
            }
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy agregando desde el controlador")
    }

    async editarHabitacion(request,response){
        let id=request.params.idHabitacion
        let datoshabitacion=request.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.editarHabitacion(id,datoshabitacion)
            response.status(200).json({
                "mensaje":"Exito modificando "+id,
                "datos":null
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy editando desdeel controlador")
    }
   async eliminarHabitacion(request,response){
        let id = request.params.idHabitacion
        let objetoServicioHabitacion=new ServicioHabitacion()

        try{
            
                response.status(200).json({
                "mensaje":"exito en eliminando la habitacion" +id,
                "datos":await objetoServicioHabitacion.eliminarHabitaciones(id),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"ERROR en la consulta " +error,
                "datos":null,

            })
        }
  }
}
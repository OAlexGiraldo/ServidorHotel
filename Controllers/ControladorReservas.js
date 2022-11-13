import { ServicioReservas } from "../Services/ServiciosReservas.js"
import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"


export class ControladorReservas{

    constructor(){}

    async buscarReservas(request,response){
        let objetoServicioReservas=new ServicioReservas()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta",
                "datos":await objetoServicioReservas.buscarReservas()
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy buscando reservaidReservaes desde el controlador")
    }

    async eliminarReserva(request,response){
        let id= request.params.idReserva
        let objetoServicioReserva=new ServicioReservas()
        try{
          
          response.status(200).json({
            "mensaje":"exito eliminando Reserva ",
            "datos":await objetoServicioReserva.eliminarReservas(id),
          })  
        } catch (error) { 
         response.status(400).json({
          "mensaje":"ERROR en la consulta "+error,
          "datos":null,
        })
        
    }
        }

    async buscarReservaPorId(request,response){
        //viajan por la url de la peticion
        let id=request.params.idReserva 
        let objetoServicioReservaid=new ServicioReservas()
        try{
            response.status(200).json({
                "mensaje":"Exito en la consulta "+id,
                "datos":await objetoServicioReservaid.buscarReservaid(id)
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy buscando una reservaidReserva por id desde el controlador")
    }

   async  registrarReserva(request,response){
        //viajan por el body de la peticion
        
        let datosreserva=request.body
        let objetoServicioReserva=new ServicioReservas()
        let objetoServicioHabitacion=new ServicioHabitacion()
       
       
        try{
            let habitacion= await objetoServicioHabitacion.buscarHabitacionesid(datosreserva.idHabitacion)
            if(habitacion == null){
                response.status(400).json({
                    "mensaje":"La habitacion no existe",
                    "datos":null
                })
            }else if(datosreserva.numeroAdultos+datosreserva.numeroNiños>habitacion.numeroMaximoPersonas){
                response.status(400).json({
                    "mensaje":"No han espacio pa tanta gente solo pueden maximo "+habitacion.numeroMaximoPersonas,
                    "datos":null
                })
            }else{
                let fecha1 = new Date(datosreserva.fechaEntrada);
                let fecha2 = new Date(datosreserva.fechaSalida)

                let dias = fecha2.getTime() - fecha1.getTime()
                let totalNoches = (Math.round(dias/ (1000*60*60/24)))
                console.log(totalNoches)
                console.log(habitacion.valorNoche)
                datosreserva.valorTotal= habitacion.valorNoche * totalNoches
                console.log(datosreserva.valorTotal)

            }    
            
            
            response.status(200).json({
                "mensaje":"Se ha realizado la reserva correctamente",
                "datos":null
    
            })
            await objetoServicioReserva.agregarReservasbd(datosreserva)
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy agregando desde el controlador")
    }

    async editarReserva(request,response){
        let id=request.params.idReserva
        let datosReserva=request.body
        let objetoServicioReserva=new ServicioReservas()
        try{
            await objetoServicioReserva.editarReservas(id,datosReserva)
            response.status(200).json({
                "mensaje":"Exito modificando "+id,
                "datos":datosReserva
    
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Error en la consulta"+error,
                "datos":null
            })
        }
        //response.send("estoy editando desdeel controlador")
    }
   
}
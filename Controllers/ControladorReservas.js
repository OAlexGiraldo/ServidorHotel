import { ServicioReservas } from "../Services/ServiciosReservas.js"
import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"


export class ControladorReservas{

    constructor(){}

    async buscarReservas(request,response){

        let objetoServicioReserva = new ServicioReservas.buscarReservas()

        try{
            response.status(200).json({
                "mensaje":"exito en la reserva",
                "datos":await objetoServicioReserva.buscarReservas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })
        }
    }

    async buscarReservaPorId(request,response){
        let idreserva=request.params.idreserva
        let objetoServicioReserva = new ServicioReservas()
        //console.log("el id de la reserva es: "+idreserva)
        try{
            response.status(200).json({
                "mensaje":"exito en la reserva "+idreserva,
                "datos":await objetoServicioReserva.buscarReservaPorId(idreserva),
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })
        }
    }

    async registrarReserva(request,response){
        let datosreserva=request.body
        let objetoServicioReserva= new ServicioReservas()
        let objetoServicioHabitacion = new ServicioHabitacion()
        console.log(datosreserva);
        try{
            let datos__habitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosreserva.idHabitacion)
            let maxPersonas = datos__habitacion.numeroMaximoPersonas
            let numeroPersonas = Number(datosreserva.numeroNinos) + Number(datosreserva.numeroAdultos)
            let entrada = new Date(datosreserva.fechaEntrada)
            let salida = new Date(datosreserva.fechaSalida)
            const diffInDays = Math.floor((salida - entrada ) / (1000 * 60 * 60 * 24));
            let costo=0
            console.log("numero personas ",maxPersonas , numeroPersonas);
            if(diffInDays >0 ){
                if(maxPersonas >= numeroPersonas){
                    costo = Number(datos__habitacion.valorNoche)*Number(diffInDays);
                    datosreserva.costoReserva=costo
                    await objetoServicioReserva.agregarReservaEnBD(datosreserva)
                    response.status(200).json({
                        "mensaje":"exito registrando la reserva",
                        "datos":null,
                    })
                }else {
                    response.status(400).json({
                        "mensaje":"No caben tantas personas",
                        "datos":null,
                        "estado":true
                    })
                }
                
            }else {
                response.status(400).json({
                    "mensaje":"No se pueden reservar tantos días en esta habitación",
                    "datos":null,
                    "estado":true
                })
            }
            
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
                "estado":true
            })
        }
    }

    async editarReserva(request,response){
        let idr = request.params.idreserva
        let datosReserva=request.body
        let objetoServicioReserva = new ServicioReservas()
        try{
            await objetoServicioReserva.editarReserva(idr,datosReserva)
            response.status(200).json({
                "mensaje":"exito editando la reserva "+idr,
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })
        }
    }

     async eliminarReserva(request,response){
        let id_del = request.params.idreserva
        let objReserva =new ServicioReservas()
        console.log(id_del)
        try{
            await objReserva.borrarReserva(id_del)
            response.status(200).json({
                "mensaje":"se eliminó correctamente la reserva",
                "datos":null,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la reserva "+error,
                "datos":null,
            })
        }
    }
}
//Este archivo establece las rutas o endpoints de cada servicio ofrecido por mi API 
import express from 'express' //Se importa express
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
let controladorHabitacion=new ControladorHabitacion() //Usando el controlador de las habitaciones
import { ControladorReservas } from '../Controllers/ControladorReservas.js'
let controladorReservas=new ControladorReservas() ////Usando el controlador de las reservas
export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesPerson/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesPerson/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesPerson/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesPerson/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)



rutasPersonalizadas.get('/hotelesPerson/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hotelesPerson/reserva/:idreserva',controladorReservas.buscarReservaPorId)
rutasPersonalizadas.post('/hotelesPerson/reserva',controladorReservas.registrarReserva)
rutasPersonalizadas.put('/hotelesPerson/reserva/:idreserva',controladorReservas.editarReserva)
rutasPersonalizadas.delete('/hotelesPerson/reserva/:idreserva',controladorReservas.eliminarReserva)
//ESTE ARCHIVO ESTABLECE LAS RUTAS O ENDPOINT DE CADA SERVICIO OFRECIDO POR MI API
import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReservas} from'../Controllers/ControladorReservas.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador habitaciones
let controladorReservas=new ControladorReservas() //usando controlador reservas

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesPerson/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesPerson/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesPerson/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesPerson/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)
rutasPersonalizadas.delete('/hotelesPerson/habitacion/:idHabitacion',controladorHabitacion.eliminarHabitacion)

//rutas del controlador de reservas


rutasPersonalizadas.get('/hotelesPerson/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hotelesPerson/reserva/:idReserva',controladorReservas.buscarReservaPorId)
rutasPersonalizadas.post('/hotelesPerson/reserva',controladorReservas.registrarReserva)
rutasPersonalizadas.put('/hotelesPerson/reserva/:idReserva',controladorReservas.editarReserva)
rutasPersonalizadas.delete('/hotelesPerson/reserva/:idReserva',controladorReservas.eliminarReserva)

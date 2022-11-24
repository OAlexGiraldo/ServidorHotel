//archivo de enrutamiento, rutas separadas para personalziar los archivos
//los datos que se llevan por URL ojala 1 y no datos sensibles body
//se mandaN DATOS que se llaman parametro como usuarios

import express from 'express'; // esta descargado de forma global

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../Controllers/ControladorReservas.js';

//como es una clase entonces se debe usar
let controladorHabitacion = new ControladorHabitacion(); // usando el controlador
let controladorReserva = new ControladorReservas(); // usando el controlador

//separa la ruta de peticion y respuesta por diferente lado
export let rutasPersonalizadas = express.Router();

rutasPersonalizadas.get('/hotelesPerson/habitaciones', controladorHabitacion.buscarHabitaciones);
rutasPersonalizadas.get('/hotelesPerson/habitacion/:idHabitacion', controladorHabitacion.buscarHabitacionPorId);
rutasPersonalizadas.post('/hotelesPerson/habitacion', controladorHabitacion.registrarHabitacion);
rutasPersonalizadas.put('/hotelesPerson/habitacion/:idHabitacion', controladorHabitacion.editarHabitacion);
rutasPersonalizadas.delete('/hotelesPerson/habitacion/:idHabitacion', controladorHabitacion.eliminaHabitacion );

rutasPersonalizadas.get('/hotelesPerson/reservas', controladorReserva.buscarReservas);
rutasPersonalizadas.get('/hotelesPerson/reserva/:idReserva', controladorReserva.buscarReservaPorId);
rutasPersonalizadas.post('/hotelesPerson/reserva', controladorReserva.registrarReserva);
rutasPersonalizadas.put('/hotelesPerson/reserva/:idReserva', controladorReserva.editarReserva);
rutasPersonalizadas.delete('/hotelesPerson/reserva/:idReserva', controladorReserva.eliminaReserva);
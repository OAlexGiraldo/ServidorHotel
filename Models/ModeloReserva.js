//costoreserva (fecha de salida - fecha de entrada)number año-mes-dia

import mongoose from 'mongoose';

//esquema es el esqueleto de como van los datos, el modelo opera con los datos para hacer con ellos
//con los que el api va a trabajar, es decir la integridad de los datos que si sean los que correspondad
//schema es un clase
// los id es mejor que las bases de datos sean automaticos
const Schema = mongoose.Schema;

const EsquemaReserva = new Schema({
  //como van los datos y cuales son requeridos
  //que tipo de dato estoy esperando
  idHabitacion: {
    required: true,
    type: String,
  },

  fechaIngreso: {
    required: true,
    type: Date,
  },

  fechaSalida: {
    require: true,
    type: Date,
  },

  numeroAdultos: {
    required: true,
    type: Number,
  },

  numeroNinos: {
    required: true,
    type: Number,
  },

  costoReserva: {
    required: true,
    type: Number,
  },
});

//se le pone un nombre y un esquema
export const modeloReserva = mongoose.model('reservas', EsquemaReserva);
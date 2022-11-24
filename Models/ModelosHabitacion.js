import mongoose from 'mongoose';

//esquema es el esqueleto de como van los datos, el modelo opera con los datos para hacer con ellos
//con los que el api va a trabajar, es decir la integridad de los datos que si sean los que correspondad
//schema es un clase
// los id es mejor que las bases de datos sean automaticos
const Schema = mongoose.Schema;

const EsquemaHabitacion = new Schema({
  //como van los datos y cuales son requeridos
  //que tipo de dato estoy esperando
  nombre: {
    required: true,
    type: String,
  },

  valorNoche: {
    required: true,
    type: Number,
  },

  descripcion: {
    require: true,
    type: String,
  },

  fotografias: {
    required: true,
    type: [String],
  },

  numeroMaximoPersonas: {
    required: true,
    type: Number,
  },
});

//se le pone un nombre y un esquema
export const modeloHabitacion = mongoose.model('habitaciones', EsquemaHabitacion);
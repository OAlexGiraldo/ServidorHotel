import mongoose from "mongoose";

//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS CON LOS QUE VA A TRABAJAR EL API
const Schema = mongoose.Schema

const EsquemaHabitacion = new Schema({
    
    nombre:{
        required:true,
        type:String,
    },
    valorNoche:{
        required:true,
        type:Number,
    },
    descripcion:{
        required:true,
        type:String,
    },
    Fotografia:{
        required:true,
        type:[String],
    },
    numeroMaximoPersonas:{
        required:true,
        type:Number,
    },
  });

  export const modeloHabitacion=mongoose.model('Habitaciones',EsquemaHabitacion)
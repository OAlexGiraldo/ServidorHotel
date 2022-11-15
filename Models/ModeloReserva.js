//IdHabitacion,Fechaentrada,Fechasalida,NumeroAdultos,,Numeronino,precio

import mongoose from "mongoose";

//ESQUEMA DE DATOS ES UN ESTANDAR DONDE APARECEN SOLO LOS DATOS CON LOS QUE VA A TRABAJAR EL API
const Schema = mongoose.Schema

const EsquemaReserva= new Schema({
    
    idHabitacion:{
        required:true,
        type:String
    },
    fechaEntrada:{
        required:true,
        type:Date
    },
    fechaSalida:{
        required:true,
        type:Date
    },
    numeroAdultos:{
        required:true,
        type:Number
    },
    numeroNinos:{
        required:true,
        type:Number
    },
    costoReserva:{
        required:false,
        type:Number
    }
  });

  export const modeloReservas=mongoose.model('Reservas',EsquemaReserva)
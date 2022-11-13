import mongoose from 'mongoose';
//este archivo conecta con mongo
export async function conectarConMongo(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exito en la conexion con Mongo")
    }catch(error){
        console.log(error)
    }
}
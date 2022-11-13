import express from 'express'

import {rutasPersonalizadas} from '../Routes/rutas.js'
import { conectarConMongo } from '../Database/conexion.js'

import cors from 'cors'

export class ServidorAPI{


    constructor(){
        this.app = express()
        this.conectarConBD()
        this.activarbody()
        this.atenderPeticiones()
    }

    //Metodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    conectarConBD(){
        conectarConMongo()
    }
    activarbody(){
        this.app.use(cors())
        this.app.use(express.json())
    }
}
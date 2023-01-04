import express  from "express"
import mongoose from 'mongoose';
import cors from "cors";

import {rutas} from './routes/rutas.js'

export class API {

    constructor(){
        
        this.app = express()
        this.conectarConBD()
        this.enrutarPeticiones()
    }

    async conectarConBD(){

        mongoose.set('strictQuery', true);

        try{

            mongoose.connect(process.env.DATABASE);
            console.log("Exito en la conexion con mongo")
    
        }catch(error){
            console.log(error)
    
        }

    }

    levantarServer(){

        this.app.listen(3000,()=>console.log(`Servidor OK ${process.env.PORT}`))

    }

    enrutarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/',rutas)

    }


}
import {Medico} from '../models/Medico.js'

export class ServicioMedico{

    async buscarMedicos(){
        let medicos=await Medico.find()
        console.log(medicos)
        return medicos
    }

    async registrarMedico(datos){
        let datosValidados=new Medico(datos)
        return await datosValidados.save()
    }


}
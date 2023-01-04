import {ServicioMedico} from '../services/ServicioMedico.js'

export class ControladorMedico{

    constructor(){}

    async buscarMedicos(request,response){

        let servicioMedico=new ServicioMedico()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta de especialistas",
                "datos": await servicioMedico.buscarMedicos(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }        
    }

    async registrarMedico(request,response){

        let datosMedico=request.body
        let servicioMedico=new ServicioMedico()
        
        try{
            await servicioMedico.registrarMedico(datosMedico)
            response.status(200).json({
                "mensaje":"exito registrando el especialista",
                "datos":null
            })
            
            
        }catch(error){
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }




}
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaMedico = new Schema({

    nombres:{
        required:false,
        type:String
    },
    documento:{
        required:false,
        type:String
    },

    especialidad:{
        required:false,
        type:String
    },
    registro:{
        required:false,
        type:String
    },
    correo:{
        required:false,
        type:String
    },
    sede:{
        required:false,
        type:String
    },
    horario:{
        required:false,
        type:String
    },
    descripcion:{
        required:false,
        type:String
    },
    fotografia:{
        required:false,
        type:String
    },
    
    
});

export const Medico=mongoose.model('medicos',EsquemaMedico)
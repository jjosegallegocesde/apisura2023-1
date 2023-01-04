import express  from "express"

import {ControladorMedico} from '../controllers/ControladorMedico.js'

let controladorMedico=new ControladorMedico()

export let rutas=express.Router()

rutas.get('/gestionapp/especialistas',controladorMedico.buscarMedicos)
rutas.post('/gestionapp/especialistas',controladorMedico.registrarMedico)
// controllers/tipoProyectoController.js
const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express');

// Crear un nuevo tipo de proyecto
const createTipoProyecto = async (req = request, res = response) => {
    try{
        const {nombre} = req.body
        //validando usuario
        const TipoProyectoDB = await TipoProyecto.findOne({nombre})
        if(TipoProyectoDB){
            return res.status(400).json({msg: 'ya existe el Nombre'})
        };

        const data = {
            nombre
        }
            
        const tipoProyecto = new TipoProyecto(data)

        await tipoProyecto.save()
        
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
};


// Obtener todos los tipos de proyecto
const getTipoProyecto = async (req = request, res = response) => {
    try{
        const tipoProyectosDB = await TipoProyecto.find()//select * from inventarios
        return res.json(inventariosDB)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
};


// Actualizar 
const updateTipoProyectoByID = async (req = request, res = response) => {
    try{
        const { id } = req.params
        const {nombre} = req.body
        const fechaActualizacion = new Date()
        const data = {
            nombre,
            fechaActualizacion
        }
        const tipoProyecto  = await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(tipoProyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }
};

module.exports = { 
    createTipoProyecto, 
    getTipoProyecto,
    updateTipoProyectoByID
};

const { request, response } = require('express');
const Cliente = require('../models/cliente');
const Etapa = require('../models/etapa');
const Universidad = require('../models/universidad');
const TipoProyecto = require('../models/tipoProyecto');

// Crear Cliente
const createCliente = async (req = request, res = response) => {
    try {
<<<<<<< HEAD
        const { nombre, email } = req.body;
        const clienteBD = await Cliente.findOne({ email });
        if (clienteBD) {
            return res.status(400).json({ msg: 'Ya existe un cliente con ese email' });
        }
        const data = { nombre, email};
=======
        const data = req.body;
>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f
        const cliente = new Cliente(data);
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (e) {
<<<<<<< HEAD
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Listar
const getClientes = async (req = request, res = response) => {
    try {
        const clientesBD = await Cliente.find();
        return res.json(clientesBD);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Actualizar
const updateClienteByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, email } = req.body;
        const fechaActualizacion = new Date();
        const data = { nombre, email, fechaActualizacion };
        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};


// Crear Etapa
const createEtapa = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const etapaBD = await Etapa.findOne({ nombre });
        if (etapaBD) {
            return res.status(400).json({ msg: 'Ya existe una etapa con ese nombre' });
        }
        const data = { nombre };
=======
        return res.status(500).json({ msg: 'Error al crear cliente: ' + e });
    }
};

// Listar Clientes
const getClientes = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al obtener clientes: ' + e });
    }
};

// Crear Etapa
const createEtapa = async (req = request, res = response) => {
    try {
        const data = req.body;
>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f
        const etapa = new Etapa(data);
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (e) {
<<<<<<< HEAD
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Listar
const getEtapas = async (req = request, res = response) => {
    try {
        const etapasBD = await Etapa.find();
        return res.json(etapasBD);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Actualizar
const updateEtapaByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const fechaActualizacion = new Date();
        const data = { nombre, fechaActualizacion };
        const etapa = await Etapa.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Crear Universidad
const createUniversidad = async (req = request, res = response) => {
    try {
        const { nombre, direccion, telefono } = req.body;
        const universidadBD = await Universidad.findOne({ nombre });
        if (universidadBD) {
            return res.status(400).json({ msg: 'Ya existe una universidad con ese nombre' });
        }
        const data = { nombre, direccion, telefono };
        const universidad = new Universidad(data);
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Listar
const getUniversidades = async (req = request, res = response) => {
    try {
        const universidadesBD = await Universidad.find();
        return res.json(universidadesBD);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Actualizar
const updateUniversidadByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono } = req.body;
        const fechaActualizacion = new Date();
        const data = { nombre, direccion, telefono, fechaActualizacion };
        const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true });
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: 'Error general ' + e });
    }
};

// Crear TipoProyecto
const createTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const { nombre } = req.body
            //validando usuario
            const tipoProyectoBD = await TipoProyecto.findOne({nombre})
            if(tipoProyectoBD){
                return res.status(400).json({msg: 'ya existe nombre de tipo de proyecto'})
            }
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
}

// listar
const getTipoProyectos = async (req = request, 
    res = response) => {
        try{
            const tipoProyectosBD = await TipoProyecto.find()
            return res.json(tipoProyectosBD)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const updateTipoProyectoByID = async (req = request,
    res = response) => {
        try{
            const { id } = req.params
            const { nombre } = req.body
            const fechaActualizacion = new Date()
            const data = {
                nombre,
                fechaActualizacion
            }
            const tipoProyecto  = 
                await TipoProyecto.findByIdAndUpdate(id, data, {new: true})
            return res.status(201).json(tipoProyecto)
        }catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error'}) 
        }
}

=======
        return res.status(500).json({ msg: 'Error al crear etapa: ' + e });
    }
};

// Listar Etapas
const getEtapas = async (req = request, res = response) => {
    try {
        const etapas = await Etapa.find();
        return res.json(etapas);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al obtener etapas: ' + e });
    }
};

// Crear Universidad
const createUniversidad = async (req = request, res = response) => {
    try {
        const data = req.body;
        const universidad = new Universidad(data);
        await universidad.save();
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al crear universidad: ' + e });
    }
};

// Listar Universidades
const getUniversidades = async (req = request, res = response) => {
    try {
        const universidades = await Universidad.find();
        return res.json(universidades);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al obtener universidades: ' + e });
    }
};

// Crear TipoProyecto
const createTipoProyecto = async (req = request, res = response) => {
    try {
        const data = req.body;
        const tipoProyecto = new TipoProyecto(data);
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al crear tipo de proyecto: ' + e });
    }
};

// Listar Tipos de Proyecto
const getTiposProyecto = async (req = request, res = response) => {
    try {
        const tiposProyecto = await TipoProyecto.find();
        return res.json(tiposProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al obtener tipos de proyecto: ' + e });
    }
};

>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f
// Exportar todas las funciones
module.exports = {
    createCliente,
    getClientes,
<<<<<<< HEAD
    updateClienteByID,
    createEtapa,
    getEtapas,
    updateEtapaByID,
    createUniversidad,
    getUniversidades,
    updateUniversidadByID,
    createTipoProyecto,
    getTipoProyectos,
    updateTipoProyectoByID
=======
    createEtapa,
    getEtapas,
    createUniversidad,
    getUniversidades,
    createTipoProyecto,
    getTiposProyecto
>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f
};

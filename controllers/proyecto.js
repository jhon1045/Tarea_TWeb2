const { request, response } = require('express');
const Cliente = require('../models/cliente');
const Etapa = require('../models/etapa');
const Universidad = require('../models/universidad');
const TipoProyecto = require('../models/tipoProyecto');

// Crear Cliente
const createCliente = async (req = request, res = response) => {
    try {
        const { nombre, email } = req.body;
        const clienteBD = await Cliente.findOne({ email });
        if (clienteBD) {
            return res.status(400).json({ msg: 'Ya existe un cliente con ese email' });
        }
        const cliente = new Cliente({ nombre, email });
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (e) {
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

// Actualizar Cliente
const updateClienteByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, email } = req.body;
        const fechaActualizacion = new Date();
        const cliente = await Cliente.findByIdAndUpdate(
            id,
            { nombre, email, fechaActualizacion },
            { new: true }
        );
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al actualizar cliente: ' + e });
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
        const etapa = new Etapa({ nombre });
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (e) {
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

// Actualizar Etapa
const updateEtapaByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const fechaActualizacion = new Date();
        const etapa = await Etapa.findByIdAndUpdate(
            id,
            { nombre, fechaActualizacion },
            { new: true }
        );
        return res.status(201).json(etapa);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al actualizar etapa: ' + e });
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
        const universidad = new Universidad({ nombre, direccion, telefono });
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

// Actualizar Universidad
const updateUniversidadByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono } = req.body;
        const fechaActualizacion = new Date();
        const universidad = await Universidad.findByIdAndUpdate(
            id,
            { nombre, direccion, telefono, fechaActualizacion },
            { new: true }
        );
        return res.status(201).json(universidad);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al actualizar universidad: ' + e });
    }
};

// Crear TipoProyecto
const createTipoProyecto = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const tipoProyectoBD = await TipoProyecto.findOne({ nombre });
        if (tipoProyectoBD) {
            return res.status(400).json({ msg: 'Ya existe un tipo de proyecto con ese nombre' });
        }
        const tipoProyecto = new TipoProyecto({ nombre });
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al crear tipo de proyecto: ' + e });
    }
};

// Listar Tipos de Proyecto
const getTipoProyectos = async (req = request, res = response) => {
    try {
        const tiposProyecto = await TipoProyecto.find();
        return res.json(tiposProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al obtener tipos de proyecto: ' + e });
    }
};

// Actualizar TipoProyecto
const updateTipoProyectoByID = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const fechaActualizacion = new Date();
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(
            id,
            { nombre, fechaActualizacion },
            { new: true }
        );
        return res.status(201).json(tipoProyecto);
    } catch (e) {
        return res.status(500).json({ msg: 'Error al actualizar tipo de proyecto: ' + e });
    }
};

// Exportar funciones
module.exports = {
    createCliente,
    getClientes,
    updateClienteByID,
    createEtapa,
    getEtapas,
    updateEtapaByID,
    createUniversidad,
    getUniversidades,
    updateUniversidadByID,
    createTipoProyecto,
    getTipoProyectos,
    updateTipoProyectoByID,
};

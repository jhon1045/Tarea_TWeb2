const { request, response } = require('express');
const Cliente = require('../models/cliente');
const Etapa = require('../models/etapa');
const Universidad = require('../models/universidad');
const TipoProyecto = require('../models/tipoProyecto');

// Crear Cliente
const createCliente = async (req = request, res = response) => {
    try {
        const data = req.body;
        const cliente = new Cliente(data);
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

// Crear Etapa
const createEtapa = async (req = request, res = response) => {
    try {
        const data = req.body;
        const etapa = new Etapa(data);
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

// Exportar todas las funciones
module.exports = {
    createCliente,
    getClientes,
    createEtapa,
    getEtapas,
    createUniversidad,
    getUniversidades,
    createTipoProyecto,
    getTiposProyecto
};

const Universidad = require('../models/universidad');
const { request, response } = require('express');

// Crear
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

module.exports = {
    createUniversidad,
    getUniversidades,
    updateUniversidadByID
};

const Etapa = require('../models/etapa');
const { request, response } = require('express');

// Crear
const createEtapa = async (req = request, res = response) => {
    try {
        const { nombre } = req.body;
        const etapaBD = await Etapa.findOne({ nombre });
        if (etapaBD) {
            return res.status(400).json({ msg: 'Ya existe una etapa con ese nombre' });
        }
        const data = { nombre };
        const etapa = new Etapa(data);
        await etapa.save();
        return res.status(201).json(etapa);
    } catch (e) {
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

module.exports = {
    createEtapa,
    getEtapas,
    updateEtapaByID
};

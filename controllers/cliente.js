const Cliente = require('../models/cliente');
const { request, response } = require('express');

// Crear
const createCliente = async (req = request, res = response) => {
    try {
        const { nombre, email } = req.body;
        const clienteBD = await Cliente.findOne({ email });
        if (clienteBD) {
            return res.status(400).json({ msg: 'Ya existe un cliente con ese email' });
        }
        const data = { nombre, email};
        const cliente = new Cliente(data);
        await cliente.save();
        return res.status(201).json(cliente);
    } catch (e) {
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

module.exports = {
    createCliente,
    getClientes,
    updateClienteByID
};

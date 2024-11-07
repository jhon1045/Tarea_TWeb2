const { Router } = require('express');
const { 
    createCliente, 
    getClientes,
    updateClienteByID 
} = require('../controllers/cliente');

const router = Router();

// Crear
router.post('/', createCliente);

// Consultar todos
router.get('/', getClientes);

// Actualizar
router.put('/:id', updateClienteByID);

module.exports = router;

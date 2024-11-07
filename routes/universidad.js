const { Router } = require('express');
const { 
    createUniversidad, 
    getUniversidades,
    updateUniversidadByID 
} = require('../controllers/universidad');

const router = Router();

// Crear
router.post('/', createUniversidad);

// Consultar todos
router.get('/', getUniversidades);

// Actualizar
router.put('/:id', updateUniversidadByID);

module.exports = router;

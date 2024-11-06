// routes/tipoProyecto.js
const { Router } = require('express');
const { createTipoProyecto, 
getTipoProyecto,
updateTipoProyectoByID } = require('../controllers/tipoProyecto');

const router = Router();

// Crear un nuevo tipo de proyecto
router.post('/', createTipoProyecto);

// Consultar todos los tipos de proyecto
router.get('/', getTipoProyecto);

// Actualizar un tipo de proyecto por ID
router.put('/:id', updateTipoProyectoByID);

module.exports = router;
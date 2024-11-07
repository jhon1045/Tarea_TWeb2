const { Router } = require('express');
const { 
    createEtapa, 
    getEtapas,
    updateEtapaByID 
} = require('../controllers/etapa');

const router = Router();

// Crear
router.post('/', createEtapa);

// Consultar todos
router.get('/', getEtapas);

// Actualizar
router.put('/:id', updateEtapaByID);

module.exports = router;

const { Router } = require('express');
const {
    createCliente,
    getClientes,
    createEtapa,
    getEtapas,
    createUniversidad,
    getUniversidades,
    createTipoProyecto,
    getTiposProyecto
} = require('../controllers/proyecto');

const router = Router();

// Rutas para Cliente
router.post('/clientes', createCliente);
router.get('/clientes', getClientes);

// Rutas para Etapa
router.post('/etapas', createEtapa);
router.get('/etapas', getEtapas);

// Rutas para Universidad
router.post('/universidades', createUniversidad);
router.get('/universidades', getUniversidades);

// Rutas para TipoProyecto
router.post('/tiposProyecto', createTipoProyecto);
router.get('/tiposProyecto', getTiposProyecto);

module.exports = router;

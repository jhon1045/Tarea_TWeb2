const { Router } = require('express');
const {
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
    updateTipoProyectoByID
} = require('../controllers/proyecto');

const router = Router();

// Rutas para Cliente
router.post('/clientes', createCliente);
router.get('/clientes', getClientes);
router.put('/clientes/:id', updateClienteByID);

// Rutas para Etapa
router.post('/etapas', createEtapa);
router.get('/etapas', getEtapas);
router.put('/etapas/:id', updateEtapaByID);

// Rutas para Universidad
router.post('/universidades', createUniversidad);
router.get('/universidades', getUniversidades);
router.put('/universidades/:id', updateUniversidadByID);

// Rutas para TipoProyecto
router.post('/tiposProyecto', createTipoProyecto);
router.get('/tiposProyecto', getTipoProyectos);
router.put('/tiposProyecto/:id', updateTipoProyectoByID);

module.exports = router;

const { Router } = require('express');
const {
    createCliente,
    getClientes,
<<<<<<< HEAD
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
=======
    createEtapa,
    getEtapas,
    createUniversidad,
    getUniversidades,
    createTipoProyecto,
    getTiposProyecto
>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f
} = require('../controllers/proyecto');

const router = Router();

// Rutas para Cliente
<<<<<<< HEAD
router.post('/clientes/', createCliente);
router.get('/clientes/', getClientes);
router.put('/clientes/:id', updateClienteByID)

// Rutas para Etapa
router.post('/etapas/', createEtapa);
router.get('/etapas/', getEtapas);
router.put('/etapas/:id', updateEtapaByID)

// Rutas para Universidad
router.post('/universidades/', createUniversidad);
router.get('/universidades/', getUniversidades);
router.put('/universidades/:id', updateUniversidadByID)

// Rutas para TipoProyecto
router.post('/tiposProyecto/', createTipoProyecto);
router.get('/tiposProyecto/', getTipoProyectos);
router.put('/tiposProyecto/:id', updateTipoProyectoByID)

=======
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
>>>>>>> 6c8c86dd82a8e96b85a8122153e13e0bd9c3d01f

module.exports = router;

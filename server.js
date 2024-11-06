// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./databases/configuration');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Inicializar Express
const app = express();
app.use(bodyParser.json());

// Importación de rutas
// const clienteRoutes = require('./routes/clientes');
// const universidadRoutes = require('./routes/universidades');
const tipoProyectoRoutes = require('./routes/tipoProyecto');
// const etapaRoutes = require('./routes/etapas');
// const proyectoRoutes = require('./routes/proyectos');

// Uso de rutas
// app.use('/api/clientes', clienteRoutes);
// app.use('/api/universidades', universidadRoutes);
app.use('/api/tipos-proyecto', tipoProyectoRoutes);
// app.use('/api/etapas', etapaRoutes);
// app.use('/api/proyectos', proyectoRoutes);

// Configuración del puerto y escucha del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

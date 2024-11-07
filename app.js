const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

const { mongoConn } = require('./databases/configuration')
mongoConn()
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const etapa = require('./routes/etapa')
const cliente = require('./routes/cliente')
const universidad = require('./routes/universidad')
// const inventario = require('./routes/inventario')

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/etapas', etapa)
app.use('/api/clientes', cliente)
app.use('/api/universidades', universidad)
// app.use('/api/inventarios', inventario)

module.exports = app
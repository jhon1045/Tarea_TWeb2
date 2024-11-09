const { Schema, model } = require('mongoose');

// Esquema de TipoProyecto
const TipoProyectoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

// Esquema de Cliente
const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        required: [true, 'Email requerido'],
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

// Esquema de Etapa
const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

// Esquema de Universidad
const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    direccion: {
        type: String,
        required: [true, 'Dirección requerida']
    },
    telefono: {
        type: String,
        required: [true, 'Teléfono requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

// Esquema de Proyecto
const ProyectoSchema = Schema({
    tipoProyecto: { 
        type: Schema.Types.ObjectId, 
        ref: 'TipoProyecto', 
        required: [true, 'Tipo de proyecto requerido']  
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Cliente requerido']
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: [true, 'Universidad requerida']
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: [true, 'Etapa requerida']
    },
    fechaCreacion: { 
        type: Date, 
        default: new Date() 
    },
    fechaActualizacion: { 
        type: Date, 
        default: new Date() 
    }
});

// Exportar todos los modelos
module.exports = {
    TipoProyecto: model('TipoProyecto', TipoProyectoSchema),
    Cliente: model('Cliente', ClienteSchema),
    Etapa: model('Etapa', EtapaSchema),
    Universidad: model('Universidad', UniversidadSchema),
    Proyecto: model('Proyecto', ProyectoSchema)
};

const mongoose = require('mongoose');

const TipoProyectoSchema = new mongoose.Schema({
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

module.exports = mongoose.model('TipoProyecto', TipoProyectoSchema);

const { Schema, model, SchemaTypeOptions} = require('mongoose')

const ProyectoSchema = Schema({

    tipoProyecto: { 
        type: Schema.Types.ObjectId, 
        ref: 'TipoProyecto', 
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

})

module.exports = model('Proyecto', ProyectoSchema)

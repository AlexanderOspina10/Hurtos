const {Schema, model} = require('mongoose')

const HurtoSchema = ({

    tipoHurto:{
        type: String,
        required:[true, 'El tipo de hurto es requerido']
    },

    direccionHurto:{
        type: String,
        required:[true, 'La dirección del hurto es requerida'],
        min:5,
    },
    

    fechaHurto: {
        type:String,
        min:5,
        required:[true, 'La fecha del hurto es requerida'],
    },

    

    ciudadHurto: {
        type:String,
        required:[true, 'La fecha del hurto es requerida'],
    },

    
    descripcionHurto:{
        type: String,
        required:[true, 'El correo del cliente es requerido'],
    },
})

module.exports = model('Hurto', HurtoSchema)
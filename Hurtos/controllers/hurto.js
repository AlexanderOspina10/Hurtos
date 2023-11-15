const {response} = require('express');
const hurto = require('../models/hurto');

Hurto = require('../models/hurto')

const getHurto = async(req, res) => {
    const hurto =  await Hurto.find(); //OBTENER TODOS LOS DATOS DE LA COLLECCION
    res.json({
        msg:hurto
    })
}

const postHurto = async(req, res) => {
    const datos = req.query//CAPTURAR DATOS DE LA URL-POSTMAN

    let mensaje = 'Insercción exitosa'

    try {
        const hurto = new Hurto(datos)
        hurto.save()
        console.log(hurto)
        
    } catch (error) {
        mensaje= error
        console.log(error)
    }

    res.json({
        msg:mensaje
    })
}

const putHurto = async(req, res) => {
    const {tipoHurto, direccionHurto, fechaHurto, ciudadHurto, descripcionHurto} = req.query //DESESTRUCTURAR
    let mensaje = ''
    try {
        const hurto = await Hurto.findOneAndUpdate({tipoHurto: tipoHurto},
            {direccionHurto:direccionHurto, fechaHurto:fechaHurto,ciudadHurto:ciudadHurto,descripcionHurto:descripcionHurto})
            mensaje = 'Actualizacion existosa'
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}

const deleteHurto = async(req, res) => {
    const {tipoHurto} = req.query //DESESTRUCTURAR
    let mensaje = ''
    try {
        const hurto = await Hurto.findOneAndDelete({tipoHurto: tipoHurto})
            mensaje = 'Eliminación existosa'
        
    } catch (error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })  
}



module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto
}
const {Router} = require('express')

const route = Router()


const{getHurto, postHurto, putHurto, deleteHurto} = require('../controllers/hurto')//IMPORTAR EL CONTROLADOR

route.get('/', getHurto)

route.post('/', postHurto)

route.put('/', putHurto)

route.delete('/', deleteHurto)

module.exports = route 
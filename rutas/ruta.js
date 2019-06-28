;
const express = require('express')
let api = express.Router(),
  control = require('../controles/Kawina')

api.get('/Kawina/leer', control.getDatos)
api.post('/Kawina/insertar', control.postDatos)
api.delete('/Kawina/borrar',control.deleteDatos)
api.put('Kawina/actualizar',control.updateDatos)

module.exports = api
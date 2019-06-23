;
const express = require('express')
let api = express.Router(),
  control = require('../controles/Kawina')

api.get('/Kawina', control.getDatos)
api.post('/Kawina', control.postDatos)


module.exports = api
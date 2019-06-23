;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let postDatos = (req, res) =>{
    let tabla = req.body.tabla
    let registro = req.body.registros
    db(tabla).returning('id').insert(registro)
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `Datos guardados`
        })
    })
    .catch(error =>{
        return res.status(500).json({
            ok: false,
            data: null,
            mensaje: `error: ${error}`
        })
    })
}

let getDatos = (req, res) =>{
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `total de datos`
        })
    })
    .catch(error =>{
        return res.status(500).json({
            ok: false,
            data: null,
            mensaje: `error: ${error}`
        })
    })
}

module.exports = {
    postDatos,
    getDatos
}
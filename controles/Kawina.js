;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let getDatos = (req, res) =>{
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `Existen ${response.length} registros`
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
let deleteDatos = (req,res) =>{
    let tabla= req.query.tabla
    let id = req.query.id
    db(tabla).where('id',id).del()
    .then(data => {
        return res.status(200).json({
            ok: true,
            datos: data,
            mensaje: `se elimino el dato ${id}`
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${error}`//solo en desarollo esta linea no es produccion
        })
    })
}
let updateDatos =(req,res)=>{
    let tabla = req.body.tabla
    let datos = req.body.registros
    let datas ="";
    datos.forEach(elementos=>{
        datas=elementos;
    });
    db(tabla).where('id',datas.id).update(datas)
    .then(response=>{
        return res.status(200).json({
            ok:true,
            data:response,
        })
    })
    .catch(error=>{
        return res.estatus(500).json({
            of:true,
            data:error,
             mensaje: `Error del servidor: ${error}`//solo en desarollo esta linea no es produccion
        })
    })
}

module.exports = {
    postDatos,
    getDatos,
    deleteDatos,
    updateDatos,
}
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query

    res.json({
        msg: 'getApi - controlador',
        q,
        nombre,
        apikey
    })
}

    const usuariosPost = (req = request, res = response) => {

        const { nombre, edad } = req.body;

        res.json({
            msg: 'postApi',
            nombre, 
            edad
        })
      }

    const usuariosPut = (req = request, res = response) => {

        const id = req.params.id;

        res.json({
            msg: 'putApi',
            id
        })
    }

    const usuariosDelete = (req = request, res = response) => {
        res.json({
            msg: 'deleteApi'
        })
    }

    const usuariosPatch = (req = request, res = response) => {
        res.json({
            msg: 'patchApi'
        })
    }

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
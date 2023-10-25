
'use strict'
const { handleHttpError } = require("../utils/handleError");
const empresas = require("../models/Empresas")
const fs = require("fs")



async function list(req, res) {

    const user = req.body.user
    console.log(user)
    const role = user.role
    if (!(role == "user"))
        res.status(500).send({ message: "no tiene permisos" })
    await empresas.find({}).sort({ id: -1 }).then(object => {
        res.status(200).send({
            message: "success",
            object: object,
            user
        })
    }).catch(err => {
        res.status(500).send({ message: "error al cargar las propiedades" })
    })
}




///////INSERTAR propiedad/////////////
async function insert(req, res) {
    try {
        var params = req.body
        console.log(params)
        const data = await empresas.create(params);
        res.status(201);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
}

module.exports = {
    list,
    insert
}
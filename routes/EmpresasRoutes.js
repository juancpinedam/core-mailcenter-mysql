'use strict'
var express = require('express')
var EmpresasController = require('../Controllers/EmpresasController')
const customHeader = require('../middleware/customHeader')
const authMiddleWare = require('../middleware/sesion')
var api = express.Router()
api.get('/list',authMiddleWare,EmpresasController.list)
api.post('/insert',customHeader,EmpresasController.insert)
module.exports = api;
'use strict'
var express = require('express')
var EstadosRoutes = require('../Controllers/EstadosController')
const authMiddleWare = require('../middleware/sesion')
var api = express.Router()
api.get('/list',authMiddleWare,EstadosRoutes.list)
module.exports = api;
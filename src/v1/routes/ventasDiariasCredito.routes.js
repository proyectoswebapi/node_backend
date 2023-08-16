const express = require("express");
const router = express(); //require("express").Router();
const { EmptyResultError } = require("sequelize");

//const saldoscaja = require("../models/saldosCaja.model.js");
const verificarToken = require("../../middlewares/verificarToken.js"); //veriftoken.verificarToken,
const ventasDiariasCrController = require('../../controllers/ventasDiariasCredito.controller.js');

router.get('/ventasdiariascr', verificarToken, ventasDiariasCrController.getVentasDiarias);

module.exports = router;
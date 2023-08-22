const express = require("express");
const router = express(); //require("express").Router();
const { EmptyResultError } = require("sequelize");

//const ventasdia = require("../models/girosGastos.model.js");
const verificarToken = require("../../middlewares/verificarToken.js");
const girosGastosController = require('../../controllers/girosGastos.controller.js');
const girosGastosNController = require('../../controllers/girosGastosN.controller.js');

// Giros agrupados 
/**
 * @openapi
 * /apiigd/v1/girosgastosa:
 *   get:
 *     tags:
 *       - girosgastosa
 *     parameters:
 *       - in: query
 *         name: 
 *         schema:
 *           type: string
 *         description: Nos genera un informe con los saldos a la fecha de las cajas y bancos que se tienen en la contabildiad.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get('/girosgastosa', verificarToken, girosGastosController.getGirosGastos)

// Grios no agrupados
router.get('/girosgastosn', verificarToken, girosGastosNController.getGirosGastosN);

module.exports = router;

const express = require("express");
const router = express(); //require("express").Router();
const { EmptyResultError } = require("sequelize");

//const saldoscaja = require("../models/saldosCaja.model.js");
const verificarToken = require("../../middlewares/verificarToken.js"); //veriftoken.verificarToken,
const recaudosDiaController = require('../../controllers/recaudosDiaInv.controller.js');

/**
 * @openapi
 * components:
 *   schemas:
 *     saldoscajas:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         Cuenta: 
 *           type: string
 *           example: 11050501
 *         Nombre:
 *           type: string
 *           example: Caja principal
 *         Saldos:
 *           type: double
 *           example: 1.234.567.89
 *         codsuc:
 *           type: string
 *           example: 001
 *         Sucursal:
 *           type: string
 *           example: PRINCIPAL
 */

/**
 * @openapi
 * /apiigd/v1/saldoscajas:
 *   get:
 *     tags:
 *       - saldoscajas
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
 *                     $ref: '#/components/schemas/saldoscajas'
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

router.get('/recaudosdiainv', verificarToken, recaudosDiaController.getAllRecaudos);

module.exports = router;
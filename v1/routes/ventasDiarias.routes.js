const express = require("express");
const router = express(); //require("express").Router();
const { EmptyResultError } = require("sequelize");

//const ventasdia = require("../models/ventasDiarias.model.js");
const verificarToken = require("../../middlewares/verificarToken.js");
const ventasDiariasController = require('../../controllers/ventasDiarias.controller.js');

/**
 * @openapi
 * components:
 *   schemas:
 *     ventasdiarias:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         sucursal: 
 *           type: string
 *           example: 001
 *         tipo:
 *           type: string
 *           example: NCE
 *         fecha:
 *           type: string
 *           example: 2020-01-01
 *         valor:
 *           type: double
 *           example: 428.400.00
 *         abonos:
 *           type: double
 *           example: 0.00
 *         diferencia:
 *           type: double
 *           example: 0.00
 *         tabla:
 *           type: string
 *           example: N
*/

/**
 * @openapi
 * /apiigd/v1/ventasdiarias:
 *   get:
 *     tags:
 *       - ventasdiarias
 *     parameters:
 *       - in: query
 *         name: 
 *         schema:
 *           type: string
 *         description: Este endpoint nos realiza un consulta de las ventas diarias
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
 *                     $ref: '#/components/schemas/ventasdiarias'
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

router.get('/ventasdiarias', verificarToken, ventasDiariasController.getVentasDiarias);

module.exports = router;
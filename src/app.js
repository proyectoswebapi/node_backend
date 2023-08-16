const express = require('express');
const session = require('express-session');
const cors = require('cors');

//const userRoutes = require('./v1/routes/tbl_usuarios.routes.js');
const indexRoutes = require('./v1/routes/index.routes.js');
const authRouter = require('./v1/routes/auth.routes.js');
const jwtConfig = require("./config/jwtConfig.js");

const saldoCajaRouter = require('./v1/routes/saldoCaja.routes.js');
const gitosGastosRouter = require('./v1/routes/girosGastos.router.js');
const ventaDiariaRouter = require('./v1/routes/ventasDiarias.routes.js');
const creditosRecogidosRouter = require('./v1/routes/creditosRecogidos.router.js');
const creditosRefinanciadosRouter = require('./v1/routes/creditosRefinanciados.router.js');
const clientesActivosRouter = require('./v1/routes/clientesActivos.router.js');
const creditosNuevosRouter = require('./v1/routes/creditosNuevos.router.js');
const recaudosDiaRouter = require('./v1/routes/recaudosDia.router.js');
const recaudosDiaInvRouter = require('./v1/routes/recaudosDiaInv.router.js');

// endpoints para consultas de cartera
const ventaDiariaCrRouter = require('./v1/routes/ventasDiariasCredito.routes.js');

//Creamos la app de express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/static', express.static('public'));
app.use(session({
  secret: jwtConfig.secret,
  resave: false,
  saveUninitialized: true
}));

// Rutas
app.use(indexRoutes);
app.use(authRouter)
app.use('/apiigd/v1', saldoCajaRouter);
app.use('/apiigd/v1', ventaDiariaRouter);
app.use('/apiigd/v1', ventaDiariaCrRouter);
app.use('/apiigd/v1', gitosGastosRouter);
app.use('/apiigd/v1', creditosRecogidosRouter);
app.use('/apiigd/v1', creditosRefinanciadosRouter);
app.use('/apiigd/v1', clientesActivosRouter);
app.use('/apiigd/v1', creditosNuevosRouter);
app.use('/apiigd/v1', recaudosDiaRouter);
app.use('/apiigd/v1', recaudosDiaInvRouter);

module.exports = app;
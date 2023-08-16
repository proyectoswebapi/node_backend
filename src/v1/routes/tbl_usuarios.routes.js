// Rutas para la autenticación de usuarios
const Router = require('express');
const getSignup = require('../../controllers/tbl_usuarios.controller.js');

const router = Router();

router.post('/signup', getSignup);

module.exports = router ;

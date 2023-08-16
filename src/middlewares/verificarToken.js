const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig.js');

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extraer el token de la cabecera Authorization

  if (!token) {
    return res.status(401).send('No se proporcinó un token válido.');
  }

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (ex) {
    res.status(400).send('Token no válido');
  }
}

module.exports = verificarToken; 
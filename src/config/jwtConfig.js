// Archivo de configuración de jsonwebtoken 
const jwtConfig = {
    secret: "r5NnRj8eEckDqp9", // Clave secreta utilizada para firmar y verificar el token
    //expiresIn: "1h", // Tiempo de vida del token
    algorithm: "HS256" // Algoritmo utilizado para firmar el token
  }
  
  module.exports = jwtConfig;
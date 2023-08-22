// Archivo de configuración de jsonwebtoken 
const jwtConfig = {
  secret: "", // Clave secreta utilizada para firmar y verificar el token
  expiresIn: "5m", // Tiempo de vida del token
  algorithm: "HS256" // Algoritmo utilizado para firmar el token
}

module.exports = jwtConfig;
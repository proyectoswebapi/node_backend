// Archivo de configuración de Sequelize 
const Sequelize = require("sequelize");
const env = "development"; // Reemplaza "development" con la cadena correspondiente a la clave que quieras usar.
const config = require("./config.json")[env];

const dbIgd = new Sequelize(config.database, config.username, config.password, config);

module.exports = dbIgd; 
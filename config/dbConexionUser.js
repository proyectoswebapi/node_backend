// Archivo de configuración de Sequelize 
const Sequelize = require("sequelize");

const configfile = require("../controllers/auth.controller.js");

const dbIgd = new Sequelize(configfile.database, configfile.username, configfile.password, {
        host: configfile.host,
        port: configfile.port,
        dialect: 'mysql'
    });

module.exports = dbIgd; 
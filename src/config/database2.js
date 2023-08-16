// Archivo de configuración de Sequelize 
const Sequelize = require("sequelize");
const database2Config = require("./dbConexion2.js");

const dbIgd = new Sequelize(
    database2Config.database, 
    database2Config.username, 
    database2Config.password, 
    {
        host: database2Config.host,
        dialect: 'mysql',
        port: database2Config.port,
    }
);

module.exports = dbIgd; 
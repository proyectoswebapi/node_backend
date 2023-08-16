// Archivo de configuración de Sequelize
const Sequelize = require("sequelize");
const env = "development"; // Reemplaza "development" con la cadena correspondiente a la clave que quieras usar.
const config = require("../config/config.json")[env];

// Conexión a la base de datos principal para que los usuarios se registren y logueen
const dbIgd = new Sequelize(config.database, config.username, config.password, config);

// Middleware para establecer la conexión a la base de datos de cada usuario
const dbIgdConnection = (req, res, next) => {
    // Si la variable global global.database existe, usar esos valores para la conexión
    if (global.configFile) {
        dbIgd.config.database = global.configFile.database;
        dbIgd.config.username = global.configFile.username;
        dbIgd.config.password = global.configFile.password;
        dbIgd.config.host = global.configFile.host;
        dbIgd.config.port = global.configFile.port;
        dbIgd.config.dialect = global.configFile.dialect;

        console.log(dbIgd.config.database);
        console.log(dbIgd.config.username);
        console.log(dbIgd.config.password);
        console.log(dbIgd.config.host);
        console.log(dbIgd.config.port);
        console.log(dbIgd.config.dialect);
    }
    req.dbIgd = dbIgd;
    next();
};

// Exportar el middleware
module.exports = dbIgdConnection;

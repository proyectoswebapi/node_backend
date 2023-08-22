const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

async function myMiddleware(req, res, next) {
    // Cargo las variables para la nueva conexión
    const dbDatabase = global.configFile.Database;
    const dbUsername = global.configFile.username;
    const dbPassword = global.configFile.password;
    const dbHost = global.configFile.host
    const dbPort = global.configFile.port;

//    sequelize.close(); // cerrar la conexión actual

    const newSequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
        port: dbPort,
        logging: false
        // any other necessary options
    });
    await newSequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            next();
        })
        .catch((err) => {
            console.error('Error switching database connection:', err);
            res.status(500).send('Internal Server Error');
        });


    req.app.set('sequelize', newSequelize); // almacenar la nueva conexión Sequelize en la aplicación Express
    next();
}

module.exports = myMiddleware;
const Sequelize = require("sequelize");
const sequelize = require('../config/database.js');

function switchDatabase(req, res, next) {
    const credentials = { // obtain user's credentials from the request
        database: global.configFile.database,
        username: global.configFile.username,
        password: global.configFile.password,
        host: global.configFile.host,
        dialect: 'mysql',
        port: global.configFile.port
        // any other necessary options
    };
    const newConnection = new sequelize(credentials);

    // replace the existing Sequelize instance with the new one
    req.app.set('sequelize', newConnection);

    next();
}

/* function updateConnection(req, res, next) {
    let newDb = global.configFile ;
    console.log(global.configFile);

    sequelize.close()
        .then(function () {
            sequelize = new Sequelize(newDb.dbName, newDb.dbUser, newDb.dbPassword, {
                host: newDb.dbHost,
                dialect: 'mysql',
                port: newDb.port
            });

            sequelize.authenticate()
                .then(function () {
                    console.log('Connection has been established successfully.');
                    req.sequelize = sequelize;
                    next();
                })
                .catch(function (err) {
                    console.error('Unable to connect to the database:', err);
                    res.status(500).send('Error updating database connection.');
                });
        })
        .catch(function (err) {
            console.error('Unable to close the connection:', err);
            res.status(500).send('Error updating database connection.');
        })
} */


//module.exports = updateConnection;

/* module.exports = (req, res, next) => {
    // Si la variable global global.database existe, usar esos valores para la conexión
    if (global.configFile) {
        let newDb = new Sequelize(global.configFile.database, global.configFile.username, global.configFile.password, {
            host: global.configFile.host,
            dialect: global.configFile.dialect,
            port: global.configFile.port
        });
        console.log(newDb.database);
        console.log(newDb.username);
        console.log(newDb.password);
        console.log(newDb.host);
        console.log(newDb.dialect);
        console.log(newDb.port);
    }

    newDb.authenticate()
        .then(() => {
            console.log("Conexión a la nueva base de datos establecida con éxito");
            req.sequelize = newDb;
            next();
        })
        .catch((err) => {
            console.error("Error al conectarse a la nueva base de datos:", err);
            res
                .status(500)
                .json({ error: "Error al conectarse a la nueva base de datos" });
        });
}; */

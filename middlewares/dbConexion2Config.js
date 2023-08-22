const Sequelize = require('sequelize');
const database2Config = require('../config/dbConexion2.js');

const sequelize2 = new Sequelize(
    process.env.DB2_DATABASE || db2Config.database,
    process.env.DB2_USERNAME || db2Config.username,
    process.env.DB2_PASSWORD || db2Config.password,
    {
        host: process.env.DB2_HOST || db2Config.host,
        dialect: db2Config.dialect,
        port: process.env.DB2_PORT || db2Config.port,
    }
);
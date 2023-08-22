module.exports = {
    host: process.env.DB2_HOST || '127.0.0.1',
    username: process.env.DB2_USERNAME || 'viewwebuserigd',
    password: process.env.DB2_PASSWORD || '$User#COnec.2022$',
    database: process.env.DB2_DATABASE || 'dbacceso_igd',
    port: process.env.DB2_PORT || 3312,
    dialect: 'mysql',
  };
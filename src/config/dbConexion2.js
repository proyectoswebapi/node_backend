module.exports = {
    host: process.env.DB2_HOST || '127.0.0.1',
    username: process.env.DB2_USERNAME || 'vistaapi',
    password: process.env.DB2_PASSWORD || '3OhS1s0uo4',
    database: process.env.DB2_DATABASE || 'dbacceso_igd',
    port: process.env.DB2_PORT || 3306,
    dialect: 'mysql',
  };
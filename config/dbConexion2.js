module.exports = {
  host: process.env.DB2_HOST || '127.0.0.1',
  username: process.env.DB2_USERNAME || '',
  password: process.env.DB2_PASSWORD || '',
  database: process.env.DB2_DATABASE || '',
  port: process.env.DB2_PORT || 3306,
  dialect: 'mysql',
};
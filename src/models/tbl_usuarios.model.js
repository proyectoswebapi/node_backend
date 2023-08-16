// Modelo para la entidad de usuarios
const { Sequelize, DataTypes } = require('sequelize'); 
const dbIgd = require('../config/database.js');

/**
 * User model que apunta a la tabla tbl_usuarios en la base de datos
 */
const User = dbIgd.define('tbl_usuarios', {
  // Los atributos del modelo son definidos aquí
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false
  },
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  id_empresa:{
    type: DataTypes.INTEGER,
  },
  tipo_usuario: {
    type: DataTypes.STRING,
  },
  activo: {
    type: DataTypes.INTEGER,
  },
});

module.exports = User;
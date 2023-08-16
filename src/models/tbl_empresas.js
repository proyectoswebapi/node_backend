const { DataTypes } = require('sequelize');
const dbIgd = require('../config/database.js');

const Profile = dbIgd.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nit_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ip_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  port_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dbname_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dbpw_empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Otros campos que necesites en tu modelo
}, {
  timestamps: false, // Esto desactiva la creación automática de campos createdAt y updatedAt
  tableName: 'tbl_empresas', // Este es el nombre de la tabla en la base de datos
});

module.exports = Profile;
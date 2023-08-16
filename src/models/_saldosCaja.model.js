// Modelo para la entidad de la vista de saldos cajas y bancos
const { Sequelize, DataTypes } = require('sequelize');
const dbIgd = require('../config/database.js');
//const dbIgd = require('../config/dbConexionUser.js');

/**
 * User model que apunta a la vista vw_saldoscajas en la base de datos
 */
const SalCaja = dbIgd.define('vw_saldoscajas', {
    // Los atributos del modelo son definidos aquí
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    Cuenta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Saldos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    codsuc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Sucursal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    dbIgd,
    timestamps: false,
    modelName: "vw_saldoscajas",
}
);

module.exports = SalCaja;  

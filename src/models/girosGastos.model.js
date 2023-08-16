// Modelo para la entidad de la vista de saldos cajas y bancos
const { Sequelize, DataTypes } = require('sequelize');
const dbIgd = require('../config/database.js');

/**
 * 
 */
const girosGastos_a = dbIgd.define('vw_giros_gastos_as', {
    // Los atributos del modelo son definidos aquí
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    sucursal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNul: false,
    },
    concepto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
},
    {
        dbIgd,
        timestamps: false,
        modelName: "vw_giros_gastos_as",
    }
);

module.exports = girosGastos_a;

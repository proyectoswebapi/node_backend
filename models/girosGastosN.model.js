// Modelo para la entidad de la vista de saldos cajas y bancos
const { Sequelize, DataTypes } = require('sequelize');
const dbIgd = require('../config/database.js');

/**
 * 
 */
const girosGastos_n = dbIgd.define('vw_giros_gastos_na', {
    // Los atributos del modelo son definidos aquí
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    cn_codcueniif: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    feccom: {
        type: DataTypes.DATE,
        allowNul: false,
    },
    SaldoPago: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    fuecom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comcon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        dbIgd,
        timestamps: false,
        modelName: "vw_giros_gastos_na",
    }
);

module.exports = girosGastos_n;

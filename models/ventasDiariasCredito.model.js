// Modelo para la entidad de la vista de saldos cajas y bancos
const { Sequelize, DataTypes } = require('sequelize');

const dbIgd = require('../config/database.js');

/**
 * User model que apunta a la vista vw_ventadiariacredito en la base de datos
 */
const VentasDia = dbIgd.define('vw_ventadiariacredito', {
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
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    entregado: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
},
    {
        dbIgd,
        timestamps: false,
        modelName: "vw_ventadiariacredito",
    }
);

module.exports = VentasDia;

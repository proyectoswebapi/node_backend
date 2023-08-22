// Modelo para la entidad de la vista de saldos cajas y bancos
const { Sequelize, DataTypes } = require('sequelize');
const dbIgd = require('../config/database2.js');

const VentasDia = dbIgd.define('vw_ventas_por_dia', {
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
    abonos: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    diferencia: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    tabla: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        dbIgd,
        timestamps: false,
        modelName: "vw_ventas_por_dia",
    }
);

module.exports = VentasDia;

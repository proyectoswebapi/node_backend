const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const User = require("../models/tbl_usuarios.model.js");
const Empresas = require("../models/tbl_empresas.js");
const funciones = require("../public/js/global-function");

const getVentasDiarias = async (req, res) => {
    try {
        const iduser = req.user.userId;

        //Buscar id usuario conectado en tbl_usuarios para extraer el idempresa:
        const conectado = await User.findOne({
            where: {
                id: iduser,
            },
            raw: true,
        });

        const idEmpresa = conectado.id_empresa;
        //con el idempresa ubicamos la empresa en tbl_empresas para extraer los datos de la conexion:
        const conecta = await Empresas.findOne({
            where: {
                id: idEmpresa,
            },
        });

        const datoc = conecta.dataValues;

        //con los datos de conexion ejecutamos la funcion async conectar:
        const ff = await funciones.conectar(
            datoc.dbname_empresa,
            datoc.port_empresa,
            datoc.dbpw_empresa,
            datoc.ip_empresa,
            ""
        );

        // Ahora si podemos ejecutar la vista en la base de datos del cliente con el objeto de conexion ff:        
        const VentasDia = ff.define(
            "vw_ventas_por_dia",
            {
                // Los atributos del modelo son definidos aquí
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
                    allowNull: false,
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
                ff,
                timestamps: false,
                modelName: "vw_ventadiariacredito",
            }
        );

        const data = await VentasDia.findAll({
            raw: true,
        });

        res.send(data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getVentasDiarias };
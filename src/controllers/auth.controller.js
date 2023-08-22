const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtConfig = require('../config/jwtConfig.js');
const User = require('../models/tbl_usuarios.model.js');
const Profile = require('../models/tbl_empresas.js');
const { validationResult } = require('express-validator');

async function register(req, res) {
    const { nombre, email, password, nit_empresa } = req.body;

    //Esta parte esa para traer la empresa si existe
    try {
        // Consultar la tabla de empresas para obtener los datos y saber si nos pertenece o no y traer el nit para grabarlo en el usuario
        const profile = await Profile.findOne({ where: { nit_empresa: nit_empresa } });

        if (!nit_empresa) {
            return res.status(400).json({ message: 'Invalid company ID' });
        }
        //Fin parte para traer la emprsa si existe
        const lnId = profile.id; // Asigno el ID encontardo a una variable para luego grabarla junto con el usuario

        // Verificar si el usuario ya está registrado
        const existingUser = await User.findOne({ where: { nombre } });
        if (existingUser) {
            return res.status(409).json({ message: 'El usuario electrónico ya está registrado' });
        }

        // Hashear la contraseña antes de almacenarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario en la base de datos
        const user = await User.create({ nombre, email, password: hashedPassword, id_empresa: lnId });

        // Generar un token JWT para el nuevo usuario
        const token = jwt.sign({ userId: user.id }, jwtConfig.secret);

        // Devolver el token JWT al usuario
        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Acá hacemos el login del usuario
async function login(req, res) {
    const { nombre, password } = req.body;

    // Buscar el usuario en la base de datos por correo electrónico
    const user = await User.findOne({ where: { nombre } });
    console.log(user);
    // Si el usuario no se encuentra, retornar un error
    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    const passwordMatches = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide, retornar un error
    if (!passwordMatches) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT para el usuario autenticado
    const token = jwt.sign({ userId: user.id }, jwtConfig.secret);

    // Si el usuario es correcto y hace login, consultamos la tabla de empresa para traer los datos de conexión
    const lnIdUsuario = user.id_empresa;
    let companyName = null;

    // Creamos un objeto con los detalles de conexi+ón obtenidos de la base de datos de usuarios
    try {
        // Consultamos la tabla de empresas para obetener los datos de conexión
        const profile = await Profile.findOne({ where: { id: lnIdUsuario } });

        if (!lnIdUsuario) {
            return res.status(400).json({ message: 'Invalid company ID' });
        }

        companyName = profile.name_empresa;

        // Eliminar esto
        //console.log(profile.dbname_empresa);
        //console.log(profile.ip_empresa);
        // Hasta acá eliminar
        //Fin parte para traer los datos de conexión de cada usuario

        global.configFile = {
            database: profile.dbname_empresa,
            username: '',
            password: profile.dbpw_empresa,
            host: profile.ip_empresa,
            port: profile.port_empresa,
            dialect: 'mysql'
        };

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }

    res.json({ token, nombre: user.nombre, tipo: user.tipo_usuario, empresa: companyName });
    req.session.internalToken = token;
}

module.exports = {
    register,
    login,
    /* login: [
        body('nombre').trim().isLength({ min: 1 }).withMessage('Correo electrónico inválido'),
        body('password').trim().isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
        login,
    ], */
};
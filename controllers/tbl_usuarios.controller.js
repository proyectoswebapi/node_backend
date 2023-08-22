const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwtConfig.js");
const { body, validationResult } = require("express-validator");
const User = require("../models/tbl_usuarios.model.JS");

const router = express.Router();

router.post(
    "/signup",
    // Validar la entrada del usuario utilizando express-validator
    body("nombre").trim().isLength({ min: 1 }),
    body("email").trim().isEmail(),
    body("password").trim().isLength({ min: 8 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nombre, email, password } = req.body;

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({
            where: { nombre },
        });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya está en uso." });
        }

        // Hashear la contraseña del usuario antes de almacenarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear el usuario en la base de datos
        const user = await User.create({
            nombre,
            email,
            password: hashedPassword,
        });

        // Generar un token JWT para el usuario recién registrado
        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '5m' });

        // Devolver el token JWT al usuario
        res.json({ token });
    }
);


module.exports = router;

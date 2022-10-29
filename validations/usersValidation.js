const { body } = require("express-validator");

module.exports = {
    registerValidation: [
        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("Formato de email invalido"),
        body("nombre")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("apellido")
            .notEmpty()
            .withMessage("Campo apellido incompleto"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
    ],
    loginValidation: [
        body("email")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("password")
        .notEmpty()
        .withMessage("Campo password incompleto")
        
    ]
}
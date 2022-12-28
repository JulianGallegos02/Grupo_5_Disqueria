const { body } = require("express-validator");
const path = require('path')

module.exports = {
    registerValidation: [
        body("email")
            .notEmpty()
            .withMessage("Campo email incompleto")
            .isEmail()
            .withMessage("Formato de email invalido"),
        body("nombre")
            .notEmpty()
            .withMessage("Campo nombre incompleto")
            .isLength({ min: 2 })
            .withMessage('Debe tener al menos 2 caracteres'),
        body("apellido")
            .notEmpty()
            .withMessage("Campo apellido incompleto")
            .isLength({ min: 2 })
            .withMessage('Debe tener al menos 2 caracteres'),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
            .isLength({ min: 8 })
            .withMessage('Debe tener al menos 8 caracteres'),
        body('avatar').custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif', '.jfif', '.webp', '.svg'];

            if (!file) {
                throw new Error('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error('Las extensiones de archivo permitidas son: .jpg, .png, .gif, .jfif, .webp y .svg');
                }
            }
            return true;
        })
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
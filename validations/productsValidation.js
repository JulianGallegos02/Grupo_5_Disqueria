const path = require('path')
const { body } = require("express-validator");

module.exports = {
    createValidation: [
        body("artista")
            .notEmpty()
            .withMessage("Debes elegir un artista"),
        body("album")
            .notEmpty()
            .withMessage("Nombre incompleto")
            .isLength({ min: 1 })
            .withMessage('Debe tener al menos 5 caracteres'),
        body("descripcion")
            .notEmpty()
            .withMessage("Descripción incompleta")
            .isLength({ min: 20 })
            .withMessage('Debe tener al menos 20 caracteres'),
        body("precio")
            .notEmpty()
            .withMessage("Precio no puede estar vacío"),
        body("genero")
            .notEmpty()
            .withMessage("Debes elegir un género"),
        body("discografica")
            .notEmpty()
            .withMessage("Debes elegir una discográfica"),
        body('cover').custom((value, { req }) => {
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
    editValidation: [
        body("artista")
            .notEmpty()
            .withMessage("Debes elegir un artista"),
        body("album")
            .notEmpty()
            .withMessage("Nombre incompleto")
            .isLength({ min: 1 })
            .withMessage('Debe tener al menos 5 caracteres'),
        body("descripcion")
            .notEmpty()
            .withMessage("Descripción incompleta")
            .isLength({ min: 20 })
            .withMessage('Debe tener al menos 20 caracteres'),
        body("precio")
            .notEmpty()
            .withMessage("Precio no puede estar vacío")
            .isLength({ min: 2 })
            .withMessage('Debe tener al menos 2 caracteres'),
        body("genero")
            .notEmpty()
            .withMessage("Debes elegir un género"),
        body("discografica")
            .notEmpty()
            .withMessage("Debes elegir una discográfica"),


    ]
}
const express = require('express');
const router = express.Router();

const apiProductController = require('../../controllers/api/productController');

//Rutas API de productos

router.get('/', apiProductController.list);
router.get("/genres", apiProductController.genreList);
router.get("/lastAlbum", apiProductController.lastAlbum);
router.get('/:id', apiProductController.detail);

module.exports = router;
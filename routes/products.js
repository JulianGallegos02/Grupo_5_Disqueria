var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

/* GET home page. */
router.get('/detail/:id', productController.detalleProducto);
router.get('/cart', productController.carrito);
router.get('/', productController.lista);
router.get('/create', productController.create);
router.post('/create', productController.store);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
router.delete('/edit/:id', productController.delete);

module.exports = router;
var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

/* GET home page. */
router.get('/productDetail', productController.detalleProducto);
router.get('/productCart', productController.carrito);
router.get('/productList', productController.lista);
router.get('/productCreate', productController.create);
router.post('/productCreate', productController.store);
router.get('/productEdit', productController.edit);


module.exports = router;
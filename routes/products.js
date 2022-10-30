var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images/cover'));
    },
    filename: function(req, file, cb){
        const newFileName = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
        cb(null, newFileName )
    }
})

const upload = multer({storage: storage});


/* GET home page. */
router.get('/detail/:id', productController.detalleProducto);
router.get('/cart', productController.carrito);
router.get('/', productController.lista);
router.get('/create', productController.create);
router.post('/create', upload.single('cover'), productController.store);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id',upload.single('cover'), productController.update);
router.delete('/edit/:id', productController.delete);

module.exports = router;
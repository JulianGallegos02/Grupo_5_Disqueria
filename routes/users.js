var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require('multer');
const path = require('path');
const validation = require ("../validations/usersValidation");
const logueadoMiddleware = require("../middleware/logueadoMiddle");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: function(req, file, cb){
        const newFileName = file.fieldname + Date.now() + "-" + path.extname(file.originalname);
        cb(null, newFileName )
    }
})

const upload = multer({storage: storage})

//login
router.get('/login', logueadoMiddleware, usersController.login);
router.post('/login',validation.loginValidation,usersController.processLogin);
router.post("/logout", usersController.logout);
router.get("/perfil/:id", usersController.perfil);
router.get("/admin", usersController.admin);

//register
router.get('/register', logueadoMiddleware, usersController.register);
router.post('/register', upload.single('avatar'), validation.registerValidation, usersController.addUser)

//Edit
router.get('/edit/:id', usersController.userEdit);
router.put('/edit/:id',upload.single('avatar'), usersController.userUpdate);

//Delete
router.delete('/edit/:id', usersController.delete);

module.exports = router;

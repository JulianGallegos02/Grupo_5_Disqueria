var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require('multer');
const path = require('path')

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

/* GET users listing. */
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', upload.single('avatar'), usersController.addUser)

module.exports = router;

var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET users listing. */
router.get('/login', mainController.login);
router.get('/register', mainController.register);

module.exports = router;
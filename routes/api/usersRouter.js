//aca van los endpoints//

//Requerimos
const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api/usersController');

//Rutas API de usuarios

router.get('/', apiUsersController.list);
router.get('/:id', apiUsersController.detail);

module.exports = router;
const express = require('express');
const UsersController = require('../../controller/users.controller');
const router = express.Router();

router
    .route('/all')
        .get(UsersController.getAllUsers)

router
    .route('/random')
        .get(UsersController.getARandomUser)
router
    .route('/save')
        .get(UsersController.saveAUser)
router
    .route('/save')
        .get(UsersController.saveAUser)
module.exports = router;

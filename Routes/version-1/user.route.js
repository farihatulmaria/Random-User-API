const express = require('express');
const UsersController = require('../../controller/users.controller');
const { users } = require('../../users');
const router = express.Router();

router
    .route('/all')
        .get(UsersController.getAllUsers)

router
    .route('/random')
        .get(UsersController.getARandomUser)

module.exports = router;

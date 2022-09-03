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
        .post(UsersController.saveAUser)
router
    .route('/update/:id')
        .patch(UsersController.updateAUser)
router
    .route('/delete/:id')
        .delete(UsersController.deleteAUser)
module.exports = router;

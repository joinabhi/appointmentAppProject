const express = require('express');

const UserController = require('../controller/user');

const router = express.Router();

router.post('/user/add-user', UserController.createUser);

router.get('/user/get-user', UserController.getUser);

router.delete('/user/delete-user/:id', UserController.deleteUser);

module.exports = router;
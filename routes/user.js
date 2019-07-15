const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')

router.get( '/user/signup', userController.register );

router.get('/user/login', userController.userLogin);

router.post('/user/signup', userController.signup);

router.post('/user/login',)

router.get('/profile', userController.userProfile)

router.get('/logout', userController.userLogout)

module.exports = router;


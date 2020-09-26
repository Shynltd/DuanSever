var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

/* GET home page. */
router.get('/', userController.getLogin);
router.post('/login', userController.checkLogin);
module.exports = router;

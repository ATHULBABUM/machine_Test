var express = require('express');
var router = express.Router();

// Import the controller functions
let userRegister = require('../src/apis/user/register');
let user = require("../src/apis/user/user");


// Define routes
router.use('/register', userRegister);
router.use('/user', user);



module.exports = router;
const express = require('express')

const {CreateUser, GetUser} = require("../controller/userController")

const router = express.Router()

router.post('/register', CreateUser);
router.get('/user', GetUser);

module.exports = router
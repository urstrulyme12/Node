const express = require('express');
const routers = express.Router();

const userController =require('../controllers/userController')
const User = require('../models/User')

routers.post('/add-user',userController.createUser)


module.exports = routers;
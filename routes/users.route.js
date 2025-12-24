const express = require('express')
const UsersRouter = express.Router()
const getProfile = require('../controllers/users.controller')

UsersRouter.get('/',getProfile)

module.exports = UsersRouter
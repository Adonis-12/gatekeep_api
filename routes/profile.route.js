const express = require('express')
const ProfileRouter = express.Router()
const getProfile = require('../controllers/profile.controller')

ProfileRouter.get('/',getProfile)

module.exports = ProfileRouter
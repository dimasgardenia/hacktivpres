const express = require('express')
const router = express.Router()
const userCont = require('../controllers/userCont')

router.post('/login', userCont.login)
router.post('/register', userCont.register)

module.exports = router

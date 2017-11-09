const express = require('express')
const router = express.Router()
const blogCont = require('../controllers/blogCont')

router.get('/home', blogCont.getAllArticles)

module.exports = router

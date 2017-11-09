const express = require('express')
const router = express.Router()
const blogCont = require('../controllers/blogCont')

router.get('/home', blogCont.getAllArticles)
router.post('/home', blogCont.PostArticles)

module.exports = router

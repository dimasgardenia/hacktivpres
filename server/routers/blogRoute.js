const express = require('express')
const router = express.Router()
const blogCont = require('../controllers/blogCont')
const loginhelp = require('../helper/jwt')

router.get('/home', blogCont.getAllArticles)
router.post('/home', loginhelp.haveLogin, blogCont.PostArticles)
router.delete('/home/:id', loginhelp.haveLogin, blogCont.deleteArticles)
router.get('/home/:id', blogCont.findByIdArticles)

module.exports = router

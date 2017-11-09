const express = require('express')
const router = express.Router()
const blogCont = require('../controllers/blogCont')

router.get('/home', blogCont.getAllArticles)
router.post('/home', blogCont.PostArticles)
router.delete('/home/:id', blogCont.deleteArticles)
router.get('/home/:id', blogCont.findByIdArticles)

module.exports = router

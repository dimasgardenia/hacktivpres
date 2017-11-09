const Blog = require('../models/blog')

let PostArticles = (req, res) => {
  Blog.create({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  }, function(err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

let getAllArticles = (req, res) => {
  Blog.find(function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  PostArticles,
  getAllArticles
}

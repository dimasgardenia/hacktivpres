const mongoose = require('mongoose')
const Schema = mongoose.Schema

let BlogSchema = new Schema({
  author: String,
  title: String,
  content: String,
  image: String
})

var Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog

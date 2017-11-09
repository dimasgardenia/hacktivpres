const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hacktivpress-dimasgardenia')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const blog = require('./routers/blogRoute')

app.use('/api', blog)

app.listen(3000, function () {
  console.log('i am at 3000')
})

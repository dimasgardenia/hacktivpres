const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync("B4c0/\/", salt)
require('dotenv').config()

let haveLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.KEY, function (err, decoded) {
    if (err) {
      console.log('you must login first')
    } else {
      req._id = decoded._id
      next()
    }
  })
}

module.exports = {
  haveLogin
}

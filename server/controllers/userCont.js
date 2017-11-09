const userMod = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const register = (req, res) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(`${req.body.password}`, salt)
  userMod.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }, function (err, result) {
    if (!err) {
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

const login = (req, res) => {
    userMod.findOne({
      username: req.body.username
    })
    .then(result => {
      if (result == null) {
        res.send('invalid username')
      } else {
        if (bcrypt.compareSync(req.body.password, result.password)) {
          let token = jwt.sign({
            _id: result._id,
            username: result.username,
            password: result.password,
            email: result.email
          }, process.env.KEY)
          res.send(token)
        } else {
          res.send('invalid password')
        }
      }
    })
    .catch(err => {
      res.send(err)
    })
}

module.exports = {
  register,
  login
}

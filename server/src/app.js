require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')




//-------- DB configration ----------------------
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
  });

  mongoose.connection.on('error', (err) => {
    console.error(`Failed to connected to the database: ${err}`);
  });

  //---------middleware ----------------------------

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// middleware for authenticating users

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    // console.log(token)
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACESSTOKENSECRET, (err, data) => {
      // console.log(data)
      if (err) return res.sendStatus(403)
      req.userId = data.user._id
      req.email = data.user.email
      next()
    })
  }
  


module.exports = app

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const register = require('./controller/register')
const login = require('./controller/login')
const router = express.Router()
const authenticate = require('./middleware/auth')
const createProduct = require('./controller/createProduct')
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


  
  app.post('/register', register)
  app.post('/login', login)
  app.post('/create', authenticate, createProduct)
  app.get('me', (req, res)=>{
    res.send("a7a")
  })

module.exports = app

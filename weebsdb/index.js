const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const routes = require('./routes/routes')
const config = require('./config/database')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

mongoose.connect(config.url)
app.use(
    cors({
      origin: [
        "http://localhost:3000"
      ],
      methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
      credentials: true
    })
  )
app.use(
    session({
        secret:'impactbyte224566',
        saveUninitialized: true,
        resave: true,
        cookie: {maxAge: 30*24*60*60*1000}
    })
)
routes(app)
app.listen(8080,() => console.log('Listening on port 8080...')
)
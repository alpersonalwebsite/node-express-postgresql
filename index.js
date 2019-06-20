const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res, next) => {
  res.json({
    message: 'Node.js, Express, and Postgres API!'
  })
})

app.get('/users', db.getUsers)

app.get('*', (req, res, next) => {
  res.status(404).json({
    message: '404, Baby!',
    error: true
  })
})

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}.`)
})

import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'

import userRouter from './resources/users/router'
import db from './utils/db'
import { simulate } from './utils/latency'

const PORT = process.env.PORT || 3333

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.use(morgan('dev'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api/users', userRouter)

app.get('/latency', simulate)

app.get('*', (req, res) => {
  res.json({
    message: 'Node.js, Express, and PostgreSQL API!'
  })
})

export const start = async () => {
  try {
    await db.sequelize.sync()
    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}

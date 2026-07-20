import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import userRouter from './resources/users/router'
import db from './utils/db'
import { simulate } from './utils/latency'

const PORT = process.env.PORT || 3333

const app = express()

app.use(helmet())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(morgan('dev'))

app.use(cors())

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

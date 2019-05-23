require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const toNumberHelper = (queryInput) => {
  const toNumber = parseInt(queryInput, 10)
  if (typeof toNumber === 'number' && !isNaN(toNumber)) {
    return toNumber
  }
  return ''
}

const resultsToDisplay = (limit) => {
  const parsedLimit = toNumberHelper(limit)
  return parsedLimit ? 'LIMIT ' + parsedLimit : ''
}

const resultsFromOffset = (offset) => {
  const parsedOffset = toNumberHelper(offset)
  return parsedOffset ? 'OFFSET ' + toNumberHelper(offset) : ''
}

const getUsers = (req, res, next) => {
  pool.query('SELECT * FROM ' + process.env.DB_TABLE +
    ' ORDER BY user_id ASC ' +
    resultsToDisplay(req.query.limit) +
    resultsFromOffset(req.query.offset),
  (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}

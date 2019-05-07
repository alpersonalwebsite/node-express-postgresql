require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const isLimited = (limit) => {
  const toNumber = parseInt(limit, 10)
  if (typeof toNumber === 'number' && !isNaN(toNumber)) {
    return 'LIMIT ' + toNumber
  }
  return ''
}

const getUsers = (req, res) => {
  pool.query('SELECT * FROM ' + process.env.DB_TABLE + ' ORDER BY user_id ASC ' + isLimited(req.query.limit), (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}

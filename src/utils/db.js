import dotenv from 'dotenv'
import Sequelize from 'sequelize'

import User from '../resources/users/model'

dotenv.config({ path: `./src/config/${process.env.ENVIRONMENT}.env` })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = User(sequelize, Sequelize)

export default db

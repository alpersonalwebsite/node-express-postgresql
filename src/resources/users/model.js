export default (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    age: Sequelize.INTEGER,
    gender: Sequelize.STRING,
    username: Sequelize.STRING,
    company: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    address: Sequelize.STRING,
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE
    }
  })

  return User
}

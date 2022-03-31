const Sequelize = require('sequelize')
const db = require('../db')
const { STRING, INTEGER, URL } = Sequelize.DataTypes

const Project = db.define('projects', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // change type to URL
  deployedLink: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Project
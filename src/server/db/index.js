const db = require('./db')

const Project = require('./models/Project')

//associations
// Project.belongsTo(Blank)

module.exports = {
  db,
  models: {
    Project
  }
}
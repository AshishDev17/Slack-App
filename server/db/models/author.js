const Sequelize = require('sequelize');
const db = require('../db');

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports = Author;

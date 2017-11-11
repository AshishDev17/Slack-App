const Sequelize = require('sequelize');
const db = require('../db');

const Author = db.define('author', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports = Author;

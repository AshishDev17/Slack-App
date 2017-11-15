const Sequelize = require('sequelize');
const Author = require('./author');
const db = require('../db');

const Message = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  defaultScope: {
    include: [
      {
        model: Author,
      }
    ],
  }
});

module.exports = Message;


const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

module.exports = app;

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.static(path.join(__dirname, '..', 'public')));

//API routes
app.use('/api', require('./api'));

//error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'Internal server error');
})

//start server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

//sync db
db.sync()
  .then(() => {
    console.log('DB synced');
  });




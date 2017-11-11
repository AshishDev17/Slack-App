const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./server/db');
const app = express();
const PORT = process.env.PORT || 3000;

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//static middleware
app.use(express.static(path.join(__dirname, '..', 'node_modules')));
app.use(express.satatic(path.join(__dirname, '..', 'public')));

//API routes


//error handling middleware


//start server


const express = require('express');
const morgan = require('morgan');
const mobileRouter = require('./routes/mobileRouter');
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Create router for modular file
app.use('/api/v1/product/mobile', mobileRouter)

module.exports = app;
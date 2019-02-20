const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./handlers/errorHandler');
const logger = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(logger(process.env.NODE_ENV));

app.use('/', routes);

app.use(errorHandler.notFound);

app.use(errorHandler.logErrors);

module.exports = app;
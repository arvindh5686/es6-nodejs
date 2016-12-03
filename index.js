'use strict'

const express = require('express');
const port = 8000;
//import ResourceController from 'resource';
const routes = require('./routes/index');
const app = express();

app.use('/', routes);
app.listen(port);

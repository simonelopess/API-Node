'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


// Carrega as Rotas
const indexRoutes = require('./routes/index-routes');
const product = require('./routes/products-routes');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoutes);
app.use('/products', product);


module.exports = app;
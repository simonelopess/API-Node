'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const config = require('./config');


const app = express();
const router = express.Router();


//Conecta Banco
mongoose.connect(config.connectionString);

//Carrega os Models
const Product = require('./models/products');
const Customer = require('./models/customer');
const Order = require('./models/order');



// Carrega as Rotas
const indexRoute = require('./routes/index-routes');
const productRoute = require('./routes/products-routes');
const customerRoute = require('./routes/customer-routes');
const orderRoute = require('./routes/order-route');



app.use(bodyParser.json({
  limit: '5mb'
}));
app.use(bodyParser.urlencoded({extended: false}));


//habilita o CORS

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app;
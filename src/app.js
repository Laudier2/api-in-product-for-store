const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Product = require('./models/Product')
const Customer = require('./models/customer')
const Order = require('./models/order')
const cors = require('cors')
require('./models/db')

const indexRouter = require('./routes/index');
const customerRouter = require('./routes/customer-route');
const orderRouter = require('./routes/order-route');


const app = express();

// Opção para usar o body-parser se caso for de sua escolha
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/order', orderRouter)

module.exports = app;

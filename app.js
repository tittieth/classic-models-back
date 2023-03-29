const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require("mysql");
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const officesRouter = require('./routes/offices');

const app = express();

app.locals.con = mysql.createConnection({
    host: "localhost",
    port: "8889",
    user: "classicmodels",
    password: "classicmodels",
    database: "classicmodels"
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/offices', officesRouter);

module.exports = app;

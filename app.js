const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./controllers/index');
const usersRouter = require('./controllers/users');
const productsRouter = require('./controllers/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

	let statusCode = 500;
	let error = 'Internal error';

	if(err.name==='SequelizeConnectionRefusedError') {
		error = 'Database error';
	}

  console.log(err);

  res.status(statusCode).json({
  	error
  });
});

module.exports = app;

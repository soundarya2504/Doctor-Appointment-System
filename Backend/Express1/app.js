var createError = require('http-errors');
var express = require('express');
var mongoose=require('mongoose')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var signup=require('./routes/Signup')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var bodyParser = require("body-parser");
var cors=require('cors')
var port = 3006;
require('dotenv').config()
var app = express();
var StudentRouter=require('./routes/students');
// view engine setup
mongoose.connect('mongodb://localhost:27017/students')
.then(()=>
   console.log("Database connected successfully")
)
.catch(err=>console.log(err))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/Signup',signup)
app.use(bodyParser.json());
app.use('/students',StudentRouter)
app.use('/',indexRouter);
app.use('/users',usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



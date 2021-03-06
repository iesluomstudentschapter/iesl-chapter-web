var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var registrationsRouter = require('./routes/registrations');
var updatesRouter = require('./routes/updates');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');

const db_url = "mongodb://localhost/iesl-web"; 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/registrations', registrationsRouter);
app.use('/updates', updatesRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter)

mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', function() {
  console.log("connected....");
})

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

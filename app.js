var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
session

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRouter = require('./routes/add')
let tasks = require('./routes/tasks')
const loginRouter = require('./routes/login')
const signipRouter = require('./routes/signip');

const {auth} = require('./middlewares/auth');
const { verify } = require('crypto');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// iduser = secret
app.use(session({
  secret:'password_SECRETO',
  cookie:{maxAge:null},
  resave:true,
  saveUninitialized:false

})
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add',auth,addRouter)
app.use('/tasks',auth, tasks)
app.use('/login', loginRouter)
app.use('/signip',signipRouter)

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

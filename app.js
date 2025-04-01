//imports required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var { Sequelize } = require('sequelize');


var dotenv = require('dotenv')


//load in any variables from .env file
dotenv.config()


// SQL Database connection setup
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // or 'postgres'
    port: process.env.DB_PORT || 3306,
    logging: false
  }
);


//define router
var indexRouter = require('./routes/index');//see it as mini express app within an app
var apiRouter = require('./routes/api'); //looks 1st for api.js - if note found, looks for an api folder

//define the app
var app = express();

// // view engine setup - set the views, location of our templates to the 'views' folder
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');//setting the template engine to the jade

const corsOptions = {
  origin: 'http://localhost:5000/'
}

//define middleware
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
        
app.use(express.static(path.join(__dirname, 'public')));

//app.use(checkFoo)

app.use('/', indexRouter);
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.error(err);
      return res.status(400).send({ status: 400, message: err.message }); // Bad request
  }
  next();
});

module.exports = app;

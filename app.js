global.db = require('./db');

const bodyParser = require('body-parser');
const express = require('express');
const calcsRouter = require('./routes/calcs');
const crudRouter = require('./routes/crud');
const morgan = require('morgan'); // Morgan para gerar o log

const env = process.env.NODE_ENV || 'development';

const app = express();

// ----- Middlewares -----
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan(':method :url :response-time')); //intercepta as requisições
// ----- Middlewares -----


// ----- Routes -----
app.get('/hello', (req, res) => {
  res.status(200).send({message: 'hello world'});
});

app.use('/calcs', calcsRouter);
app.use('/crud', crudRouter);
// ----- Routes -----


// ----- Error handlers -----
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (env === 'development') {
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500).send({
      error: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
// ----- Error handlers -----

module.exports = app;

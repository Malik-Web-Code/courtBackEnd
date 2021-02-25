const winston = require('winston');
const express = require('express');
const config = require('config');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// require('./startup/logging')();
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
// require('./startup/validation')();

const port = process.env.PORT || config.get('port');
app.listen(port, () =>
  winston.info(`Server is listening on port ${port}...`)
);

app.get('/', (req, res) => {
  res.json({ "message": "Connected" });
});


// module.exports = server;

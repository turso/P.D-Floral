const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const photoRouter = require('./routes/photoRoutes');

process.on('uncaughtException', function(error) {
  console.log(error.stack);
});

app.use(express.static('dist'));

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

morgan.token('res', function(res) {
  return JSON.stringify(res.body);
});

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

app.use('/api/photos', photoRouter);

// Express will serve up the index.html file
// if it doesn't recognize the route. Example page refresh!

const path = require('path');
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const apiGet = async (name, url, params = {}) => {
  try {
    const promise = fetch(`${config.baseUrl}/${url}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json'
      })
    }).then(handleErrors);
    return promise;
  } catch (err) {
    console.error(`${name} failed: ${err.message}`);
  }
};

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

server.on('close', () => {
  mongoose.connection.close();
});

module.exports = {
  app,
  server
};

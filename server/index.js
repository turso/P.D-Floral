const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

const db = mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database ', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

nextApp.prepare().then(() => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan(':method :url :res :status :response-time[4]'));

  morgan.token('res', function(res) {
    return JSON.stringify(res.body);
  });

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  app.on('close', () => {
    mongoose.connection.close();
  });
});

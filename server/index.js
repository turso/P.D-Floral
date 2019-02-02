const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const config = require('./utils/config');
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');
const cors = require('cors');

const db = mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database ', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(config.port, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${config.port}`);
  });

  app.on('close', () => {
    mongoose.connection.close();
  });
});

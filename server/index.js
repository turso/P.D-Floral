const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const config = require('./utils/config');

const dev = process.env.NODE_DEV !== 'production';
const passport = require('passport');

const mongoose = require('mongoose');
const cors = require('cors');
require('./utils/passport');

const axios = require('axios');

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database ', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev'));
    morgan.token('res', function(res) {
      return JSON.stringify(res.body);
    });

    app.use(
      cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: config.cookieKey
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    // app.get('/login', passport.authenticate('instagram'), function(req, res) {});

    // app.get('/callback', passport.authenticate('instagram', { failureRedirect: '/' }), function(
    //   req,
    //   res
    // ) {
    //   console.log('kiinnostaa callback sisältö');
    //   console.log('code', req.query.code);

    //   res.redirect('/photos');
    // });

    // Default catch-all handler to allow Next.js to handle all other routes
    app.all('*', (req, res) => {
      return handle(req, res);
    });

    app.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${config.port}`);
    });

    app.on('close', () => {
      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });

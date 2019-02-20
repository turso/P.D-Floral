const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./utils/config');

const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const nextAuth = require('next-auth');
const nextAuthConfig = require('./next-auth.config');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const InstagramStrategy = require('passport-instagram');

const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const cookieParser = require('cookie-parser');
let request = require('request'); // "Request" library

const User = require('./models/user');

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database ', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: process.env.INSTAGRAM_REDIRECT_URL
    },
    function(accessToken, refreshToken, profile, done) {
      console.log('YRITETÄÄN LUODA MONGOOSEEN USERIA');
      console.log('PROFILE ON SEURAAVA', profile);
      console.log('ACCESS TOKEN ON TÄMÄ', accessToken);

      User.findOne(
        {
          id: profile.id
        },
        function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            user = new User({
              id: profile.id,
              displayName: profile.displayName,
              userName: profile.userName,
              provider: profile.provider
            });
            user.save(function(err) {
              if (err) console.log(err);
              console.log('TALLENNETTIIN UUSI USER');
              return done(err, user);
            });
          } else {
            return done(err, user);
          }
        }
      );
      return done(null, profile);
    }
  )
);

nextApp
  .prepare()
  .then(() => {
    return nextAuthConfig();
  })
  .then(nextAuthOptions => {
    // Don't pass a port to NextAuth!
    if (nextAuthOptions.port) delete nextAuthOptions.port;

    return nextAuth(nextApp, nextAuthOptions);
  })
  .then(nextAuthApp => {
    // Get instance of Express from NextAuth instance
    const expressApp = nextAuthApp.expressApp;

    expressApp.use(cors());
    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(cookieParser());

    expressApp.use(morgan('dev'));
    morgan.token('res', function(res) {
      return JSON.stringify(res.body);
    });

    // Configure additional routes here
    expressApp.use('/api/v1/users', () => {});

    expressApp.get('/login', passport.authenticate('instagram'), function(req, res) {});

    expressApp.get(
      '/callback',
      passport.authenticate('instagram', { failureRedirect: '/' }),
      function(req, res) {
        console.log('kiinnostaa callback sisältö');
        console.log('code', req.query.code);
        // Successful authentication, redirect home.
        res.redirect('/photos');
      }
    );
    // expressApp.get('/login', function(req, res) {
    //   var state = generateRandomString(16);
    //   res.cookie(stateKey, state);

    //   // your application requests authorization
    //   var scope = 'user-read-private user-read-email';
    //   res.redirect(
    //     'https://accounts.spotify.com/authorize?' +
    //       querystring.stringify({
    //         response_type: 'code',
    //         client_id: client_id,
    //         scope: scope,
    //         redirect_uri: redirect_uri,
    //         state: state
    //       })
    //   );
    // });

    // expressApp.get('/callback', function(req, res) {
    //   // your application requests refresh and access tokens
    //   // after checking the state parameter
    //   console.log('kiinnostaa callback sisältö');
    //   console.log('code', req.query.code);
    //   console.log('state', req.query.state);

    //   var code = req.query.code || null;
    //   var state = req.query.state || null;
    //   var storedState = req.cookies ? req.cookies[stateKey] : null;

    //   if (state === null || state !== storedState) {
    //     res.redirect(
    //       '/#' +
    //         querystring.stringify({
    //           error: 'state_mismatch'
    //         })
    //     );
    //   } else {
    //     res.clearCookie(stateKey);
    //     var authOptions = {
    //       url: 'https://accounts.spotify.com/api/token',
    //       form: {
    //         code: code,
    //         redirect_uri: redirect_uri,
    //         grant_type: 'authorization_code'
    //       },
    //       headers: {
    //         Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
    //       },
    //       json: true
    //     };

    //     request.post(authOptions, function(error, response, body) {
    //       if (!error && response.statusCode === 200) {
    //         var access_token = body.access_token,
    //           refresh_token = body.refresh_token;

    //         var options = {
    //           url: 'https://api.spotify.com/v1/me',
    //           headers: { Authorization: 'Bearer ' + access_token },
    //           json: true
    //         };

    //         // use the access token to access the Spotify Web API
    //         request.get(options, function(error, response, body) {
    //           console.log(body);
    //         });

    //         // we can also pass the token to the browser to make requests from there
    //         res.redirect(
    //           '/#' +
    //             querystring.stringify({
    //               access_token: access_token
    //               // refresh_token: refresh_token
    //             })
    //         );
    //       } else {
    //         res.redirect(
    //           '/#' +
    //             querystring.stringify({
    //               error: 'invalid_token'
    //             })
    //         );
    //       }
    //     });
    //   }
    // });

    // expressApp.get('/refresh_token', function(req, res) {
    //   // requesting access token from refresh token
    //   var refresh_token = req.query.refresh_token;
    //   var authOptions = {
    //     url: 'https://accounts.spotify.com/api/token',
    //     headers: {
    //       Authorization: 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64')
    //     },
    //     form: {
    //       grant_type: 'refresh_token',
    //       refresh_token: refresh_token
    //     },
    //     json: true
    //   };

    //   request.post(authOptions, function(error, response, body) {
    //     if (!error && response.statusCode === 200) {
    //       var access_token = body.access_token;
    //       res.send({
    //         access_token: access_token
    //       });
    //     }
    //   });
    // });

    // Default catch-all handler to allow Next.js to handle all other routes
    expressApp.all('*', (req, res) => {
      let nextRequestHandler = nextApp.getRequestHandler();
      return nextRequestHandler(req, res);
    });

    expressApp.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`ready at http://localhost:${config.port}`);
    });

    expressApp.on('close', () => {
      mongoose.connection.close();
    });
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });

// app.get('/about', (req, res) => {
//   return app.render(req, res, '/about', req.query);
// });

// server.get('*', (req, res) => {
//   return handle(req, res);
// });

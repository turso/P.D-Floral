const passport = require('passport');
const InstagramStrategy = require('passport-instagram').Strategy;
const config = require('./config');

const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new InstagramStrategy(
    {
      clientID: config.clientId,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackUrl
    },
    async (accessToken, refreshToken, profile, done) => {

      const existingUser = await User.findOne({ instagramId: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ instagramId: profile.id, accessToken }).save();
        done(null, user);
      }
    }
  )
);

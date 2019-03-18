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
      console.log('access token ', accessToken);
      // console.log('refresh token ', refreshToken);
      console.log('profile ', profile);

      const existingUser = await User.findOne({ instagramId: profile.id });

      if (existingUser) {
        console.log('OLI JO KÄYTTÄJÄ');
        done(null, existingUser);
      } else {
        console.log('LUOTIIN UUSI KÄYTTÄJÄ');
        const user = await new User({ instagramId: profile.id, accessToken }).save();
        done(null, user);
      }
    }
  )
);

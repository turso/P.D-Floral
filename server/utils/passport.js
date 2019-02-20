const passport = require('passport');
const InstagramStrategy = require('passport-instagram');
const mongoose = require('mongoose');
const config = require('./config');

// USER MODEL HERE //
const User = mongoose.model('user');

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
      console.log('refresh token ', refreshToken);
      console.log('profile ', profile);

      const existingUser = await User.findOne({ instagramid: profile.id });

      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ instagramid: profile.id }).save();
        done(null, user);
      }
    }
  )
);

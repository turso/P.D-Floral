const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  instagramId: String,
  provider: String,
  displayName: String,
  name: {
    familyName: String,
    givenName: String,
    middleName: String
  },
  username: String,
  emails: [{ value: String, type: String }],
  photos: [{ value: String }],
  accessToken: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;

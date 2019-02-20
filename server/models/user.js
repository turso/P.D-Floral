const mongoose = require('mongoose');
let findOrCreate = require('mongoose-findorcreate');

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
  photos: [{ value: String }]
});

userSchema.plugin(findOrCreate);

const User = mongoose.model('user', userSchema);

module.exports = User;

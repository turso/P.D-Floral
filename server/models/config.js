var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model(
  'config',
  new Schema({
    key: String,
    value: String,
    modifiedOn: {
      type: Date,
      default: Date.now
    },
    createdOn: {
      type: Date,
      default: Date.now
    }
  })
);

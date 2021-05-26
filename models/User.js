const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  following: [{
    type: Schema.ObjectId,
    ref: "users"
  }]
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    uname: {
        type: String,
        required: true
      },
      uemail: {
        type: String,
        required: true
      },
      umessage: {
        type: String,
        required: true
      }
});

var Users = mongoose.model('Users', userSchema);
module.exports = Users;
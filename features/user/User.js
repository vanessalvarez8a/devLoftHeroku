var mongoose = require('mongoose');

function capitalize(val) {
  if(typeof val !== 'string') val ='';
  return val.charAt(0).toUpperCase() + val.substring(1);
}


var User = new mongoose.Schema({
  name: {type: String, set: capitalize, required: true},
  email: {type: String},
  githubId: {type: String},
  projects: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Project'}]

}, {collection: 'user'}) //collection is the projects

module.exports = mongoose.model('User', User);

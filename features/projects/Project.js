var mongoose = require('mongoose');

function capitalize(val) {
  if(typeof val !== 'string') val ='';
  return val.charAt(0).toUpperCase() + val.substring(1);
}


var Project = new mongoose.Schema({
  name: {type: String, set: capitalize, required: true},
  bootcamp: {type: String, set: capitalize, required: true},
  course: {type: String, set: capitalize, required: true},
  github: {type: String, required: true},
  imageurl: {type: String, required: true},
  website: {type: String, required: true},
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]


}, {collection: 'project'}) //collection is the projects

module.exports = mongoose.model('Project', Project);

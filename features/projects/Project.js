var mongoose = require('mongoose');

function capitalize(val) {
  if(typeof val !== 'string') val ='';
  return val.charAt(0).toUpperCase() + val.substring(1);
}


var Project = new mongoose.Schema({
  name: {type: String, set: capitalize, required: true},
  bootcamp: {type: String, set: capitalize, required: true},
  image: {type: String, required: true, max: 39},
  github: {type: String, required: true}
})

module.exports = mongoose.model('Project', Project);

var User = require('./User');

module.exports = {
  addUser: function( req, res ) { //this works
    new User(req.body).save(function(err, user) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.send(user)
    })
  },
  getOneUser: function(req, res) {
    User.findOne({"_id":req.params.id}).populate('projects').exec().then(function( user ) {
      res.send(user);
    })
  },
  getUser: function(req, res) {
    User.find().populate('projects').exec().then(function( user ) { //the instance of the model of Project
      res.send(user);
    })
  },
  putUser: function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(user);
  })
},
deleteUser: function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(user);
  })
}


}

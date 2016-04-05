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
    User.findById(req.params.id).exec(function(err, user ) { //the instance of the model of Project
      if(err) {
        return res.status(500).send(err);
      }
      console.log(user);
      res.send(user);
    })
  },
  getUser: function(req, res) {
    User.find().populate('Project').exec().then(function( user ) { //the instance of the model of Project
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

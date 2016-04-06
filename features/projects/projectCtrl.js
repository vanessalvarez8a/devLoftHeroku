var Project = require('./Project');
var User = require('../user/User');

module.exports = {
  addProject: function( req, res ) { //this works
    new Project(req.body).save(function(err, project) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      // User.findById(req.params.userid).exec( function(err, user) {
      //   if(err) {
      //     return res.status(500).send(err);
      //   }
      //   user.projects.push(req.params.userid)
      //   user.save(function(err, saveduser) {
      //     if(err) {
      //       return res.status(500).send(err);
      //     }
      //     res.send(project);
      //   })
      // })
      res.send(project);
    })
  },
  getProject: function(req, res) {
    Project.find().then(function( project ) {
      res.send(project);
    })
  },
  getOneProject: function(req, res) {
    Project.findOne({"_id":req.params.id}).then(function( project ) {
      res.send(project);
    })
  },
  putProject: function(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, function(err, project) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(project);
  })
},
deleteProject: function(req, res) {
  Project.findByIdAndRemove(req.params.id, function(err, project) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(project);
  })
}


}

var Project = require('./Project');

module.exports = {
  addProject: function( req, res ) { //this works
    new Project(req.body).save(function(err, project) {
      if(err) {
        return res.status(500).send(err);
      }
      res.send(project)
    })
  },
  getProject: function(req, res) {
    Project.find().then(function( project ) {
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

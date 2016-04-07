var Project = require('./Project');
var User = require('../user/User');

module.exports = {
  addProject: function( req, res ) { //this works
    new Project(req.body).save(function(err, project) { //the whole point of this project callback is to put it into user.projects.push
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      User.findOne({"_id":project.user}).exec( function(err, user) { //looking for a user that has that user id
        if(err) {
          return res.status(500).send(err);
        }
        user.projects.push(project._id); // pushing the project.id to user.projects array
        console.log("this is project", project);
        console.log("this is user", user);
        user.save(function(err, saveduser) {
          if(err) {
            return res.status(500).send(err);
          }
          res.send(project);
        })
      })
      // res.send(project);
    })
  },
  getProject: function(req, res) {
    Project.find().then(function( project ) {
      res.send(project);
    })
  },
  getOneProject: function(req, res) {
    Project.findOne({"_id":req.params.id}).populate('user').exec().then(function( project ) {
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
  console.log('TOP LEVEL')
  Project.findByIdAndRemove( req.params.id, function( err, project ) {
    if(err) {
      return res.status(500).send(err)
    }
    console.log('AFTER PROJECT FINDBY ID ')
    User.findById(project.user).exec( function(err, user) { //looking for a user that has that user id
      if(err) {
        return res.status(500).send(err);
      }
      console.log('AFTER USER FIND BY ID!')
      user.projects.splice(user.projects.indexOf(req.params.id), 1); // inndex where to start splicing the 1 is to splice out one thing
      user.save(function(err, saveduser) {
        console.log('AFTER USER SAVE')
        if(err) {
          return res.status(500).send(err);
        }
        return res.send(project);
      })
    })
  })
  // Project.findByIdAndRemove(req.params.id).exec().then(function( project ) {
  //   if(err) {
  //     return res.status(500).send(err)
  //   }
  //   console.log('AFTER PROJECT FINDBY ID ')
  //   User.findById(project.user).exec( function(err, user) { //looking for a user that has that user id
  //     if(err) {
  //       return res.status(500).send(err);
  //     }
  //     console.log('AFTER USER FIND BY ID!')
  //     user.projects.splice(user.projects.indexOf(req.params.id), 1); // inndex where to start splicing the 1 is to splice out one thing
  //     user.save(function(err, saveduser) {
  //       console.log('AFTER USER SAVE')
  //       if(err) {
  //         return res.status(500).send(err);
  //       }
  //       return res.send(project);
  //     })
  //   })
  // })
}
// deleteProject: function(req, res) {
//   Project.findByIdAndRemove(req.params.id, function(err, project) {
//     if(err) {
//       return res.status(500).send(err)
//     }
//     res.send(project);
//   })
// }


}

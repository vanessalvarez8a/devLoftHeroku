angular.module('devLoftApp')
.factory('projectService', function( $http, $q ) {
  return {

    addProject: function( project, userId ) {
      var deferred = $q.defer();
      // var uid = $cookies.get('userId');
      // console.log(user);
      $http({
        method: 'POST',
        url: 'https://devloft.herokuapp.com/api/project/',
        data: {
          name: project.name,
          bootcamp: project.bootcamp,
          course: project.course,
          github: project.github,
          imageurl: project.imageurl,
          website: project.website,
          user: userId

        }
      }).then(function(res) {
        deferred.resolve(res);
      })
      return deferred.promise;
    },
    getProjects: function() {
      return $http.get('/api/project');
    },

    deleteProject: function(id) { //parameter from the controller
      return $http.delete('/api/project/' + id); //
    },
    putProject: function(id, data) { // CHANGES
      return $http.put('/api/project/' + id, data);
    }
  }
});

// if(query) {
//   return $http.get('/api/project?' + query + '=' + value);
// }

angular.module('devLoftApp')
.factory('projectService', function( $http, $q ) {
  return {

    addProject: function( project ) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: 'https://devloft.herokuapp.com/api/project',
        data: {
          name: project.name,
          bootcamp: project.bootcamp,
          course: project.course,
          github: project.github,
          imageurl: project.imageurl,
          website: project.website
        }
      }).then(function(res) {
        deferred.resolve(res);
      })
      return deferred.promise;
    },
    getProject: function() {
      return $http.get('/api/project');
    }
  }
});

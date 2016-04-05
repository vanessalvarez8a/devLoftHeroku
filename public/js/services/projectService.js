angular.module('devLoftApp')
.factory('projectService', function( $http, $q, $cookies ) {
  return {

    addProject: function( project ) {
      var deferred = $q.defer();
      var uid = $cookies.get('userId');
      $http({
        method: 'POST',
        url: 'https://devloft.herokuapp.com/api/project/' + uid,
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

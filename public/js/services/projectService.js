angular.module('devLoftApp')
.factory('projectService', function( $http ) {
  return {

    addProject: function( project ) {
      $http.post('/api/project');
    },
    getProject: function( project ) {
      $http.get('/api/project');
    }
  }
});

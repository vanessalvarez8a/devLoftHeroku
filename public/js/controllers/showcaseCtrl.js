angular.module('devLoftApp')
.controller('showcaseCtrl', function( $scope, projectService, $http ) {


	$scope.getProject = function( user ) {
    projectService.getProject().then(function(response) {
      $scope.projects = response.data; // .data is an array and projects will be the project in projects 
      console.log($scope.projects);
    })

	}
  $scope.getProject();
});

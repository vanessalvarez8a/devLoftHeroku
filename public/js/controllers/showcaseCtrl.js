angular.module('devLoftApp')
.controller('showcaseCtrl', function( $scope, projectService, $http, userService ) {


	$scope.getProject = function( user ) {
    projectService.getProjects().then(function(response) {
      $scope.projects = response.data; // .data is an array and projects will be the project in projects
      console.log("$scope.projects", $scope.projects);
    })

	}
  $scope.getProject();

	$scope.getUser = function(user) {
		userService.getUser().then(function(res) {
			console.log("get user", res);
		})
	}
});

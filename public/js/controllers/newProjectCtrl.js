angular.module('devLoftApp')
.controller('newProjectCtrl', function( $scope, projectService, $http, $state, auth ) {
  console.log(auth);
  $scope.newProjectData = {};

	$scope.addProject = function( user, data ) {
    projectService.addProject($scope.newProjectData).then(function(res) {
      console.log(res);
      $state.go('showcase');
    })
	}

});

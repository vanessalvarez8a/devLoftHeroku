angular.module('devLoftApp')
.controller('newProjectCtrl', function( $scope, projectService, $http, $state, currentuser ) {

  $scope.newProjectData = {};

	$scope.addProject = function() {
    projectService.addProject($scope.newProjectData, $scope.user._id).then(function(res) {
      console.log(res);
      $state.go('showcase');
    })
	};

  $scope.user = currentuser;
  console.log($scope.user);

});

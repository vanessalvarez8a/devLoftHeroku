angular.module('devLoftApp')
.controller('newProjectCtrl', function( $scope, projectService, $http, $state ) {

  $scope.newProjectData = {};

	$scope.addProject = function( user ) {
    console.log($scope.newProjectData);
		$http({
      method: 'POST',
      url: 'http://localhost:9000/api/project',
      data: $scope.newProjectData
    }).then(function(res) {
      if(res.data) {
        $state.go('showcase');
      }else{
        console.log('failed');
      }
    })
	}

});

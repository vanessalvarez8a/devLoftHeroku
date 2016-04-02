angular.module('devLoftApp')
.controller('showcaseCtrl', function( $scope, projectService, $http ) {


	$scope.getProject = function( user ) {
		$http({
      method: 'GET',
      url: 'http://localhost:9000/api/project',
      data:
    }).then(function(res) {
      if(res.data) {
        $scope.project = $scope
      }else{
        console.log('failed');
      }
    })
	}

});

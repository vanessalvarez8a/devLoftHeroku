angular.module('devLoftApp')
.controller('panelCtrl', function( $scope ) {

  $scope.goTab = function(index){
		$scope.activeTab = index;
		for(var i = 0, max = $scope.tabs.length; i < max; i++){
			if(i == index){
				$scope.tabs[i].status = true;
			}else{
				$scope.tabs[i].status = false;
			}
		}
	}

});

angular.module('devLoftApp')
.controller('panelCtrl', function( $scope ) {

  $scope.tab = 1;

  $scope.selectTab = function(setTab) {
    $scope.tab = setTab;
  };

});

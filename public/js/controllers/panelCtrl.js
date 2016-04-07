angular.module('devLoftApp')
.controller('panelCtrl', function( $scope ) {

  $scope.this.tab = 1;

  $scope.this.selectTab = function(setTab) {
    $scope.this.tab = setTab;
  };

});

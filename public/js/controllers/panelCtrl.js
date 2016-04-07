angular.module('devLoftApp')
.controller('panelCtrl', function( $scope ) {

  $scope.this.tab = 1;

  $scope.this.selectTab = function(tab, setTab) {
    this.tab = setTab;
  };

});

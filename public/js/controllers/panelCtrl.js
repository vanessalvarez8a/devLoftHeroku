angular.module('devLoftApp')
.controller('panelCtrl', function( $scope ) {

  $scope.this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

});

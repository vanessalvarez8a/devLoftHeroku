angular.module('devLoftApp')
.controller('panelCtrl', function() {

  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

});

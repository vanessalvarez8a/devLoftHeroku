angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope) {

  $scope.showHeader = true;

  $rootScope.$emit('$stateChangeStart', function(event, toState) {
    if (toState.name === 'home') {
      $scope.showHeader = true;
    } else {
      $scope.showHeader = false;
    }
  });



});

angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope) {

  $scope.showHeader = true;

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name === '/') {
      $scope.showHeader = true;
    } else {
      $scope.showHeader = false;
    }
  });



});

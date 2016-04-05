angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope) {

  $scope.showHeader = true;

  // $scope.$on('$stateChangeStart', function(event, toState) {

  $scope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name === 'home') {
      return $scope.showHeader = true;
    } else {
      $scope.showHeader = false;
    }
  });



});

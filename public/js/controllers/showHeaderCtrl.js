angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope) {

  $scope.$on.showHeader = true;

  // $scope.$on('$stateChangeStart', function(event, toState) {

  $scope.$emit('$stateChangeStart', function(event, toState) {
    if (toState.name === 'home') {
      $scope.showHeader = true;
    } else {
      $scope.showHeader = false;
    }
  });



});

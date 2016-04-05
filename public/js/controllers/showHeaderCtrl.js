angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope) {

  $scope.showHeader = true;

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
    if (toState.name === 'home') {
      $scope.showHeader = true;
    } else if(toParams.name === 'home') {
      $scope.showHeader = true;
    } else if (fromState.name === 'home') {
      $scope.showHeader = true;
    }
    else {
      $scope.showHeader = false;
    }
  });



});


// $scope.$on('$stateChangeStart', function(event, toState) {
//
// $scope.$on('$stateChangeStart', function(event, toState) {
//   if (toState.name === 'home') {
//      $scope.showHeader = true;
//   } else {
//     $scope.showHeader = false;
//   }
// });

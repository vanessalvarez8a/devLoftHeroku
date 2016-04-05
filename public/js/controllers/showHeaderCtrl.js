angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope, $location) {

  $scope.showHeader = true;

  $scope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name === 'home') {
      $scope.showHeader = true;
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

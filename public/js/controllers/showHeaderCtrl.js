angular.module('devLoftApp').controller('showHeaderCtrl', function($scope, $rootScope, $location) {

  $scope.showHeader = true;

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    if (toState.name === 'home') {
      $scope.showHeader = true;
    } else {
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

angular.module('devLoftApp')
.service('userService', function( $http, $q ) {
  this.sucessUser = function() {
    return $http({
      method: 'GET',
      url: '/me'
    });
  };
});

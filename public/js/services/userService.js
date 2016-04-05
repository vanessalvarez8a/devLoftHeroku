angular.module('devLoftApp')
.service('userService', function( $http, $q, $cookies ) {
  this.successUser = function() {
    var deferred = $q.defer();

    $http({method: 'GET', url:'/me'})
            .success(function(response) {
              console.log('success', response);
              deferred.resolve(response);
            })
            .error(function(err) {
              console.log(err);
              deferred.reject(err);
            })

          return deferred.promise;
        };
  this.getUser = function() {
    var deferred = $q.defer();
    var userid = $cookies.get('userId');
    $http({method: 'GET', url:'/user/' + userid})
            .success(function(response) {
              console.log('success', response);
              deferred.resolve(response);
            })
            .error(function(err) {
              console.log(err);
              deferred.reject(err);
            })

          return deferred.promise;
        };




});

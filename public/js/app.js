angular.module('devLoftApp', ['ui.router']);


angular.module('devLoftApp')
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


	var checkLoggedin = function($q, $http, $location){
		// Initialize a new promise
		var deferred = $q.defer();
		// Make an AJAX call to check if the user is logged in
		console.log($http.get('/me'))
		$http.get('/me').success(function(user){
			// Authenticated
			console.log(user);
			if (user !== '0') deferred.resolve();
			// Not Authenticated
			else {
				deferred.reject();
				$location.url('/#/home');
			}
		});

		return deferred.promise;
	};


	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
    controller: 'showHeaderCtrl'
	})
  .state('showcase', {
  url: '/showcase',
  templateUrl: '/templates/showcase.html',
	controller: 'showcaseCtrl'
})
  .state('project', {
  url: '/project',
  templateUrl: '/templates/project.html',
	controller: 'newProjectCtrl',
	resolve: {
		auth: checkLoggedin
	}
  })

	$urlRouterProvider.otherwise('/');

});

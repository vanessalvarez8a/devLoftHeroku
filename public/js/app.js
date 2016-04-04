angular.module('devLoftApp', ['ui.router']);


angular.module('devLoftApp')
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {



	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
    controller: 'showHeaderCtrl',

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
		auth: function(userService, $state) {
			if(!userService.sucessUser()) {
				$state.go('showcase');
			} else
			console.log(userService.sucessUser())
			return userService.sucessUser();

		}
	}
  })

	$urlRouterProvider.otherwise('/');

});

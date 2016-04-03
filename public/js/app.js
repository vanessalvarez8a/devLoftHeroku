angular.module('devLoftApp', ['ui.router']);


angular.module('devLoftApp')
.config(function($stateProvider, $urlRouterProvider) {
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
	controller: 'newProjectCtrl'
  })

	$urlRouterProvider.otherwise('/');

});

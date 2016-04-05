angular.module('devLoftApp', ['ui.router']);


angular.module('devLoftApp')
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.interceptors.push(function($q, $location) {
  return {
    responseError: function(res) {
      switch (res.status) {
        case 403:
          // $location.path('home');
					// console.log(`Reject Resopnse`);
          return $q.reject(res);
      }
    }
  };
});
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
			userService.sucessUser()
				.then(function(response) {
					return response
				})
				.catch(function(err){
					$state.go('/#/home')
				})
		}
	}
})

	$urlRouterProvider.otherwise('/');

});

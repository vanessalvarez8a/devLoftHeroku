angular.module('devLoftApp', ['ui.router', 'ngCookies']);


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
		auth: function(userService, $state, $cookies) {
			userService.successUser()
				.then(function(response) {
					console.log(response);
					$cookies.put('userId', response._id);
					return response;
				})
				.catch(function(err){
					$state.go('home');
				})
		},
		currentuser: function(userService){
			return userService.getUser();
		}

	}
})

	$urlRouterProvider.otherwise('/');

});

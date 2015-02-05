var app = angular.module('nh0815', [
	'ngRoute'
]);

app.config([ '$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/about', {
				templateUrl: 'about.html'
			}).
			when('/resume', {
				templateUrl: 'resume.html'
			}).
			otherwise({
				redirectTo: '/about'
			});
	}
]);

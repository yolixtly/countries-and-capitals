var app = angular.module('CoCaApp', ['ngRoute', 'ngAnimate', 'dataServices', 'data'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'components/home-view.html',
			controller: 'HomeCtrl',
			controllerAs: 'home' 
		})
		.when('/countries', {
			templateUrl: 'components/countries-view.html',
			controller: 'CountriesCtrl',
			controllerAs: 'co'
		})
		.when('/countries/:countryCode', {
			templateUrl: 'components/details-view.html',
			controller: 'DetailsCtrl'
		})
		.when('/error', {
			templateUrl: 'components/error-view.html'
		})
		.otherwise({ //persitant 
			redirectTo: '/error'
		});
	}]);
		// only on reload .run() will be executed. 1 time
// app.run(['$rootScope', '$location', function($rootScope, $location){
// 	$rootScope.$on('$rootScope', function(){
// 			$location.path('/error');
// 	});
// }]);





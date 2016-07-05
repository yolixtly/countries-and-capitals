angular.module('CoCaApp', ['ngRoute', 'ngAnimate', 'dataServices', 'data'])
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
	}]).run(['$rootScope', '$location', '$timeout', '$log', 
		function($rootScope, $location, $timeout, $log){
			//Broadcasted if a redirection function fails 
			//or any redirection or resolve promises are rejected
			$rootScope.$on('$routeChangeError', function(){
					$location.path('/error');
			});
			//for animation purposes, we set the following:
			//everytime we change view, a loading image will be displayed 
			$rootScope.$on('$routeChangeStart', function(){
					$rootScope.isLoading = true;
			});
			$rootScope.$on('$routeChangeSuccess', function(){
				$timeout(function(){
					$rootScope.isLoading = false;
					$log.info($rootScope.isLoading, 'Change view in 1 second');
				}, 500);
			});
}]);





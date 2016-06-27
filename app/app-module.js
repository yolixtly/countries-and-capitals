var app = angular.module('CoCaApp', ['ngRoute']).config(['$routeProvider', function($routeProvider){
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
			controller: 'DetailsCtrl',
			controllerAs: 'det'
		})
		.when('/error', {
			template: '<p class="error"> Error - Page Not Found </p>'
		})
		.otherwise({ //persitant 
			redirectTo: '/error'
		});
}]);
		// 	// only on reload . 1 time
		// app.run(['$rootScope', '$location', function($rootScope, $location){
		// 	$rootScope.$on('$rootScope', function(){
		// 		$location.path('/error');
		//  	});
		// }]);

app.controller('HomeCtrl', [function(){

}]);

app.controller('CountriesCtrl', [function(){
	
}]);

app.controller('DetailsCtrl', [function(){
	
}]);
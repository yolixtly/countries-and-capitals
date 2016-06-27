var app = angular.module('CoCaApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
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
		.when('/details', {
			templateUrl: 'components/details-view.html',
			controller: 'DetailsCtrl',
			controllerAs: 'det'
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

app.controller('HomeCtrl', [function(){

}]);

app.controller('CountriesCtrl', [function(){
	
}]);

app.controller('DetailsCtrl', [function(){
	
}]);
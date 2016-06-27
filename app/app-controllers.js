var app = angular.module('CoCaApp');

app.controller('HomeCtrl', [function(){

}]);

app.controller('CountriesCtrl', ['$scope', '$location', '$filter', 'countryData', '$q', function($scope, $location, $filter, countryData, $q){
		var vm = this;
		//returns an object result with all the info required to start the app
		vm.countries = countryData.countries;
		console.log(vm.countries);

		//
		vm.showDetail = function(country){
			$location.path('/countries/' + country.countryCode);
		};
		// console.log(vm.showDetail());
}]);

app.controller('DetailsCtrl', [function(){
	
}]);
var app = angular.module('CoCaApp');

app.controller('HomeCtrl', [function(){

}]);

app.controller('CountriesCtrl', ['$scope', '$location', '$filter', 'countryData', '$q', function($scope, $location, $filter, countryData, $q){
//for the current execution Context. Where binding cannot take the window object 
'use strict';

	var vm = this; 

	var toString = Object.prototype.toString;

	//We first evaluate if the API call returned any Data and if so..
	$q.when(countryData.countries).then(function(result){
		if(toString.call(countryData.countries) == '[object Object]') {
			//countryData.countries NOW holds the path directly to the countries,
			//not the entire object result like before
			countryData.countries = result.geonames;
		}
		//used to populate the table in countries-view.html
		//contains an array of objects, where each object is a country
		vm.countries = countryData.countries;
		console.log(vm.countries);
	});

		//Variables to organize the list by field
		//the default is country.Name 
		vm.selectedField = 'countryName';
		vm.isReversed = false;

		// vm.showDetail = function(country){
		// 	$location.path('/countries/' + country.countryCode);
		// };
		// console.log(vm.showDetail());



}]);

app.controller('DetailsCtrl', [function(){
	
}]);
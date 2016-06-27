//the next factory, takes all the return data from geonamesFactory and make
//it available for all the application: 
angular.module('data', [])
	.factory('countryData', ['geonamesFactory', function(geonamesFactory){
		var countryData = {};

		countryData.countries = geonamesFactory.getCountries();
		countryData.getCountry = geonamesFactory.getCountry;
		countryData.getCapitals = geonamesFactory.getCapitals;
		countryData.getNeighbors = geonamesFactory.getNeighbors;
		return countryData;
	}]);
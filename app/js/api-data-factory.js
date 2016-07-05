//the next factory, takes all the return data from apiRequestFactory and make
//it available for all the application: 
angular.module('data', ['dataServices'])
	.factory('countryData', ['apiRequestFactory', function(apiRequestFactory){

		var countryData = {};

		//Returns the data object with all the Country Info 
		//required to start the app
		countryData.countries = apiRequestFactory.getCountries();
		//
		countryData.getCountry = apiRequestFactory.getCountry;
		//
		countryData.getCapitals = apiRequestFactory.getCapitals;
		//
		countryData.getNeighbors = apiRequestFactory.getNeighbors;
		//is the entire object with its 4 methods, each one, making http requests 
		return countryData;
	}]);

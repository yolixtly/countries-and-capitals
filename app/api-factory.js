/* Factory Purpose: Make API Calls to geonames */

angular.module('dataServices', [])
	.factory('geonamesFactory', ['$http', '$q', '$route', function($http, $q, $route){

		var username = 'yolixtly';
		var urlBase = 'http://api.geonames.org';

		return {

			getCountries : function(){
				//use $q service when performing multiple Requests.
				var defer = $q.defer();
				// the endpoint required for the first call is : 
				var url = urlBase + 'countryInfoJSON';
				var request = {
					callback : 'JSON_CALLBACK',
					username : username
				};

				$http({
					method : 'JSONP',
					url : url,
					params : request,
					//list should only be gotten from the server once, then:
					cache : true
				})
				.then(function(data, status, headers, config){
					if(typeof data.status == 'object'){
						console.log('Error: ' + data.status.message);
						defer.reject();
					} else {
						defer.resolve(data);
					}
				})
				.then(function(data, status, headers, config){
					console.log(status + ' fail to access geonames.org.');
					defer.reject();
				});
				return defer.promise;
			},

			getCountry : function(countryCode){
				var defer = $q.defer();
				var url = urlBase + 'countryInfoJSON';
				var request = {
					callback : 'JSON_CALLBACK',
					country : countryCode,
					username : username
				};

				$http({
					method : 'JSONP',
					url : url,
					params : request,
					cache : true
				})
				.then(function(data, status, headers, config){
					defer.resolve(data.geonames);
				})
				.then(function(data, status, headers, config){
					console.log(status + 'fail to access country from geonames.org');
					defer.reject();
				});
				return defer.promise;
			},

			getNeighbors : function(countryCode){
				var defer = $q.defer();
				var url = urlBase + 'neighboursJSON';
				var request = {
					callback : 'JSON_CALLBACK',
					country : countryCode,
					username : username
				};

				$http({
					method : 'JSONP',
					url : ulr,
					params: request,
					cache : true
				})
				.then(function(data, status, headers, config){
					defer.resolve(data);
				})
				.then(function(data, status, headers, config){
					console.log(status + ' fail to access geonames.org');
					defer.reject();
				});

				return defer.promise;
			},

			getCapitals : function(countryCode){
				var defer = $q.defer();
				var url = urlBase + 'searchJSON';
				var request = {
					callback : 'JSON_CALLBACK',
					q : 'capital',
					//to format the output with linefeeds and indentation
					formatted : true,
					country : countryCode,
					maxRows : 1, 
					username : username
				};

				$http({
					method : 'JSONP',
					url : url,
					params : request,
					cache : true
				})
				.then(function(data, status, headers, config){
					defer.resolve(data.geonames[0]);
				})
				.then(function(data, status, headers, config){
					console.log(status + ' fail to access geonames.org');
					defer.reject();
				});

				return defer.promise;
			}
		};
	}]);
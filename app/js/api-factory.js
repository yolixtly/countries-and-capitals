/* Factory Purpose: Make API Calls to geonames */
angular.module('dataServices', [])
  .factory('apiRequestFactory', ['$http', '$q', '$route', function($http, $q, $route){

    var username = 'yolixtly';
    var urlBase = 'https://crossorigin.me/http://api.geonames.org/';

    return {
      //Result : Country information :
      //Capital, Population, Area in square km, Bounding Box of mainland 
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
        .success(function(data, status, headers, config){
          if(typeof data.status == 'object') {
                 console.log("Error'" + data.status.message + "'");
                 defer.reject(data.status);
               } else {
                   defer.resolve(data);
               }
        })
        .error(function(data, status, headers, config){
          console.log(status + ' fail to access geonames.org.');
          defer.reject();
        });
        return defer.promise;
      },

      // To obtain the Country name pass the 2 digit Country Code 
      // it must be uppercase like: MX
      getCountry: function(countryCode) {
          var defer = $q.defer();
          var url = urlBase + "countryInfoJSON";
          var request = {
              callback: 'JSON_CALLBACK',
              country: countryCode,
              username: username
          };

        $http({
          method : 'JSONP',
          url : url,
          params : request,
          cache : true
        })
        .success(function(data, status, headers, config){
          defer.resolve(data.geonames);
        })
        .error(function(data, status, headers, config){
          console.log(status + 'fail to access country from geonames.org');
          defer.reject();
        });
        return defer.promise;
      },
      //Result : returns the neighbours of a toponym.
      getNeighbors: function(countryCode){
        var defer = $q.defer();
        var url = urlBase + "neighboursJSON";
        var request = {
          callback: 'JSON_CALLBACK',
          country: countryCode,
          username: username
      };

      $http({
        method: 'JSONP',
        url: url,
        params: request,
        cache: true
      })

      .success(function(data, status, headers, config) {
        defer.resolve(data);
      })

      .error(function(data, status, headers, config) {
        console.log(status + " error attempting to access geonames.org.");
        defer.reject();
      });

      return defer.promise;
    },

      //this will return the capital given the Country Code 
      //by endpoint  searchJSON
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
        .success(function(data, status, headers, config){
          defer.resolve(data.geonames[0]);
        })
        .error(function(data, status, headers, config){
          console.log(status + ' fail to access geonames.org');
          defer.reject();
        });

        return defer.promise;
      }
    };
  }]);
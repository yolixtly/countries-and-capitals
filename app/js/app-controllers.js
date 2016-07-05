var app = angular.module('CoCaApp', []);

app.controller('HomeCtrl', ['$scope', function($scope){
  $scope.welcome = 'Welcome!';
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

    //showDetails is call when click a name country in the table
    vm.showDetail = function(country){
      $location.path('/countries/' + country.countryCode);
    };
}]);

app.controller('DetailsCtrl', ['$scope', '$route', 'countryData', function($scope, $route, countryData){
  //in this controller we make use of the CountryData factory 
  //which contains info about capitals population and neighbours

   // Promise that returns the specific value of countryCode then...
   //CountryCode is provided when we enter into the details view and the 'DetailsCtrl'
   //is called: then 'current' corresponds to the current countryCode available
   //then it returns the promise and sets the variable country to the first matching data 
   //now can be referenced in the details view.

   //RETURNS : country.param; param = name, area, population etc.
    countryData.getCountry($route.current.params.countryCode).then(function(result){
        $scope.country = result[0];

    });
   //RETURNS : capital and capital population
  countryData.getCapitals($route.current.params.countryCode).then(function(result){
    $scope.capital = result;
    $scope.capitalPopulation = $scope.capital.population;
  });

   //RETURNS : neighbors array
  countryData.getNeighbors($route.current.params.countryCode).then(function(result){
    $scope.neighbors = result.geonames;
  });

   //IMAGES code: 
    $scope.flag = $route.current.params.countryCode.toLowerCase();
    $scope.map = $route.current.params.countryCode;

}]);
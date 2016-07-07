describe('ControllersSpec', function(){
	beforeEach(module('CoCaApp'));

	describe('CountriesCtrlSpec', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('CountriesCtrl', {
				$scope : scope
			});
		}));

		it('should return an array of countries', function(){
			scope.countries = []; 
			// scope.showDetail('IT');
		});
	});

	describe('DetailsCtrlSpec', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('DetailsCtrl', {
				$scope : scope,
				$route: {current: {params: {countryCode: "IT"}}}
			});
		}));

		it('should return an object for Country and capital, an array for neighbors, and string for flag and map', function(){
			scope.country = {};
			scope.neighbors = [];
			scope.capital = {};
			scope.flag = "";
			scope.map = "";
		});
	});

	describe('HomeCtrlSpec', function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller('HomeCtrl', {
				$scope : scope,
			});
		}));

		it('should return a message for Welcome', function(){
			scope.welcome = "";
		});
	});
});
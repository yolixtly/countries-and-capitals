describe('ControllersSpec', function(){
	beforeEach(module("CoCaApp"));

	describe("CountriesCtrl", function(){
		var ctrl, scope;
		beforeEach(inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			ctrl = $controller("CountriesCtrl", {
				$scope : scope
			});
		}));

		it("should return an array of countries", function(){
			scope.countries = []; 
		});
	});
});
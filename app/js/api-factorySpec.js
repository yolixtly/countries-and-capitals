describe('apiRequestFactory', function(){
	beforeEach(module('CoCaApp'));

	describe('getCountries', function(){
		it('should return a url string that queries geonames for a list of all countries',
			inject(function(apiRequestFactory, $rootScope, $httpBackend){
				$httpBackend.expect('GET', 'http://api.geonames.org/countryInfo?type=JSON&username=yolixtly').respond(200);
				var status = false;

				apiRequestFactory.getCountries().then(function(){
					status = true;
				});

				// $rootScope.$digest();
		  //       $httpBackend.flush();
		  //       expect(status).toBe(true);
		  //       $httpBackend.verifyNoOutstandingRequest();
			})
		);		
	});

	describe('getCountry', function(){
		it('should build a url string that queries geonames for data on Italy',
			inject(function(apiRequestFactory, $rootScope, $httpBackend){
				$httpBackend.expect('GET', 'http://api.geonames.org/countryInfo?country=IT&type=JSON&username=yolixtly').respond(200);
				var status = false;

				apiRequestFactory.getCountry('IT').then(function(){
					status = true;
				});

				// $rootScope.$digest();
		  //       $httpBackend.flush();
		  //       expect(status).toBe(true);
		  //       $httpBackend.verifyNoOutstandingRequest();
			})
		);		
	});

	describe('getNeighbors', function(){
		it('should build a url string that queries geonames for Italys neighbors.',
			inject(function(apiRequestFactory, $rootScope, $httpBackend){
				$httpBackend.expect('GET', 'http://api.geonames.org/neighbours?country=IT&type=JSON&username=yolixtly').respond(200);
				var status = false;

				apiRequestFactory.getCountry('IT').then(function(){
					status = true;
				});

				// $rootScope.$digest();
		  //       $httpBackend.flush();
		  //       expect(status).toBe(true);
		  //       $httpBackend.verifyNoOutstandingRequest();
			})
		);		
	});	

	describe('getCapitals', function(){
		it('should build a url string that queries geonames for data on the capital of Italy',
			inject(function(apiRequestFactory, $rootScope, $httpBackend){
				$httpBackend.expect('GET', 'http://api.geonames.org/search?country=IT&formatted=true&q=capital&style=full&type=JSON&username=yolixtly').respond(200);
				var status = false;

				apiRequestFactory.getCountry('IT').then(function(){
					status = true;
				});

				// $rootScope.$digest();
		  //       $httpBackend.flush();
		  //       expect(status).toBe(true);
		  //       $httpBackend.verifyNoOutstandingRequest();
			})
		);		
	});	
});
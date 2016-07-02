describe('CoCaApp', function() {
    beforeEach(module('CoCaApp'));

    //Spec for Home Route 
    describe('/ route', function() {
        it('should load the home template and controller',
            inject(function($location, $rootScope, $httpBackend, $route) {
                $httpBackend.whenGET('components/home-view.html').respond('...');
                $httpBackend.expectGET('components/home-view.html').respond(200);

                $rootScope.$apply(function() {
                    $location.path('/');
                });
                $httpBackend.flush();
                expect($route.current.controller).toBe('HomeCtrl');
                expect($route.current.loadedTemplateUrl).toBe('components/home-view.html');

                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            }));
    });

    //Spec for Countries Route
      describe('/countries route', function() {
        it('should load the Countries template (The table) and controller',
            inject(function($location, $rootScope, $httpBackend, $route) {

              //assertions
                $httpBackend.whenGET('components/countries-view.html').respond('...');
                $httpBackend.expectGET('components/countries-view.html').respond(200);

                $rootScope.$apply(function() {
                    $location.path('/');
                });
                $httpBackend.flush();
                //assertions
                expect($route.current.controller).toBe('CountriesCtrl');
                expect($route.current.loadedTemplateUrl).toBe('components/countries-view.html');

                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            }));
    });
});
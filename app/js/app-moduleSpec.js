describe("routesSpec", function() {
    beforeEach(module("CoCaApp"));

    describe("/ route", function() {
        it('should load home template/controller',
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

                    $location.path('/countries');

                });

                $httpBackend.flush();

                expect($route.current.controller).toBe("CountriesCtrl");
                expect($route.current.loadedTemplateUrl).toBe("components/countries-view.html");

                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            }));
    });

    describe("/details route", function() {
        it('should load details template/controller',
            inject(function($location, $rootScope, $httpBackend, $route) {
                $httpBackend.whenGET('components/details-view.html').respond('...');
                $httpBackend.expectGET('components/details-view.html').respond(200);

                $rootScope.$apply(function() {
                    $location.path('/countries/AU');
                });

                $httpBackend.flush();

                expect($route.current.controller).toBe("DetailsCtrl");
                expect($route.current.loadedTemplateUrl).toBe("components/details-view.html");

                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            }));
    });

    describe("/error route", function() {
        it('should load error template/controller',
            inject(function($location, $rootScope, $httpBackend, $route) {
                $httpBackend.whenGET('components/error-view.html').respond('...');
                $httpBackend.expectGET('components/error-view.html').respond(200);

                $rootScope.$apply(function() {
                    $location.path('/error');
                });

                $httpBackend.flush();

                expect($route.current.loadedTemplateUrl).toBe("components/error-view.html");


                $httpBackend.verifyNoOutstandingRequest();
                $httpBackend.verifyNoOutstandingExpectation();
            }));
    });
});
var $httpBackend, $rootScope, $controller, beforeEachShared, afterEachShared, $compile, config;


beforeEachShared = function () {
    beforeEach(module('spotifyApp', 'mockedData'));
    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_, $templateCache, _config_, _$compile_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $controller = _$controller_;
        $templateCache.put('views/about.html', '');
        $templateCache.put('views/main.html', '');
        $templateCache.put('views/paginator.html', '');
        $templateCache.put('views/playlist.html', '');
        $templateCache.put('views/search.html', '');		
        config = _config_;
    }));
};
afterEachShared = function () {
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
};




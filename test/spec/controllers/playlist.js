'use strict';

describe('Controller: PlaylistCtrl', function () {
	var controller;
    beforeEachShared();
    beforeEach(function () {
        controller = function () {
            return $controller('PlaylistCtrl', {'$scope': $rootScope});
        };
    });
    //afterEachShared();

    it('should register successfully', inject(function () {
        controller();
        $httpBackend.flush();
    }));
});

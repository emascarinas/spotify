'use strict';

describe('Controller: PlaylistCtrl', function () {
	var controller;
    beforeEachShared();
    beforeEach(function () {
        controller = function () {
            return $controller('PlaylistCtrl', {'$scope': $rootScope});
        };
    });
    afterEachShared();

    it('should initialize songs from mocks', inject(function (localStorage, getSearchResults, assertValues) {
		localStorage.setData(getSearchResults.tracks.items);
        controller();
		expect($rootScope.songs.length).toBe(2);
		expect($rootScope.total).toBe(assertValues.total);
		expect($rootScope.songs[1].name).toBe(assertValues.songName);
    }));
    it('should clear songs', inject(function (localStorage, getSearchResults) {
		localStorage.setData(getSearchResults.tracks.items);
        controller();
		$rootScope.clear();
		expect($rootScope.songs.length).toBe(0);
		expect($rootScope.total).toBe(0);
		expect(localStorage.getData().length).toBe(0);
    }));	
    it('should remove last song', inject(function (localStorage, getSearchResults, assertValues) {
		localStorage.setData(getSearchResults.tracks.items);
        controller();
		$rootScope.remove($rootScope.songs[1]);
		expect($rootScope.songs.length).toBe(1);
		expect($rootScope.total).toBe(205214);
		expect($rootScope.songs[1]).toBe(undefined);
    }));	
	
});

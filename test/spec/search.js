'use strict';

describe('Controller: SearchCtrl', function () {
	var controller;
    beforeEachShared();
    beforeEach(function () {
        controller = function () {
            return $controller('SearchCtrl', {'$scope': $rootScope});
        };
    });
    afterEachShared();

    it('should set songs from search', inject(function (localStorage, getSearchResults, assertValues) {
		$httpBackend.whenGET(config.apiUrl + config.searchEnd + '?' + $.param({q: 'emas',type:'track',offset:0,limit:config.itemsPerPage})).respond(getSearchResults);
		$rootScope.songList = getSearchResults.tracks.items[1];
        controller();
		$rootScope.query = 'emas';
		$rootScope.currentPage = 1;
		$rootScope.goSearch();
		$httpBackend.flush();
		expect($rootScope.songList.length).toBe(2);
		expect($rootScope.songList[1].name).toBe(assertValues.songName);
    }));
    it('should show error if search is blank', inject(function (localStorage, getSearchResults, assertValues, util) {
		$rootScope.songList = getSearchResults.tracks.items[1];
		spyOn(util,'showError');
        controller();
		$rootScope.query = undefined;
		$rootScope.goSearch();
        expect(util.showError).toHaveBeenCalled();
        expect(util.showError.calls.mostRecent().args[0].errorMessage).toEqual(assertValues.errorMess);		
    }));
    it('should add playlist', inject(function (localStorage, getSearchResults, assertValues, util, $location) {
		spyOn($location,'path');
        controller();
		localStorage.clear();
		localStorage.init();
		$rootScope.songs.selected = getSearchResults.tracks.items;
		$rootScope.addPlaylist();
		expect($location.path).toHaveBeenCalled();
		expect($location.path.calls.mostRecent().args[0]).toEqual('playlist');		
		expect(localStorage.getData().length).toEqual(2);
		expect(localStorage.getData()[1].name).toEqual(assertValues.songName);
		
    }));
	
    it('should error on add playlist', inject(function (localStorage, getSearchResults, assertValues, util) {
		spyOn(util,'showError');
        controller();
		$rootScope.addPlaylist();
        expect(util.showError).toHaveBeenCalled();
        expect(util.showError.calls.mostRecent().args[0].errorMessage).toEqual(assertValues.errorSong);		
    }));
	
	
	
});

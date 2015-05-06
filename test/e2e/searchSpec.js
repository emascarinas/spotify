'use strict';
var Common = require('../e2e/commonPage.js');
var Search = require('../e2e/searchPage.js');

describe('searchSpec', function () {
    var common, searchPage, mockModule;
    beforeEach(function () {
        common = new Common();
        searchPage = new Search();
    });
	it('should show list for query "a" ', function () {
		searchPage.mockSearch();
		common.gotoHomePage();
		searchPage.clickSearch();
		searchPage.fillSearchInput('a');
		searchPage.clickSearchButton();
		var elem = element(by.css('body > div.container > div > div.jumbotron.ng-scope > h1'));
        expect(elem.getText()).toBe('sdf');
    });
	
    
	
	
});

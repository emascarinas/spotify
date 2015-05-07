'use strict';
var Common = require('../e2e/commonPage.js');
var Search = require('../e2e/searchPage.js');

describe('searchSpec', function () {
    var common, searchPage, mockModule;
    beforeEach(function () {
        common = new Common();
        searchPage = new Search();
    });
	it('should go to home page', function () {
		common.gotoHomePage();
		common.assertTextFromDataSet('body > div.container > div > div.jumbotron.ng-scope > h1','assertValues','h1');
    });
    it('should go to search page', function () {
		common.gotoHomePage();
		searchPage.clickSearch();
		common.assertTextFromDataSet('body > div.container > div > h2','assertValues','h2');
    });	
	it('should show list for query "a" coming from mocks', function () {
		searchPage.mockSearch();
		common.gotoHomePage();
		searchPage.clickSearch();
		searchPage.fillSearchInput('a');
		searchPage.clickSearchButton();
		common.assertTextFromDataSet('body > div.container > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > span','assertValues','songName');
		common.assertCountByCss('body > div.container > div > table > tbody > tr',2);		
    });
});

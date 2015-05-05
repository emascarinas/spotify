'use strict';
var Common = require('../e2e/commonPage.js');
var Search = require('../e2e/searchPage.js');

describe('searchSpec', function () {
    var common, searchPage;
    beforeEach(function () {
        common = new Common();
        searchPage = new Search();
    });

    it('should go to home page', function () {
		common.assertTextByCss('body > div.container > div > div.jumbotron.ng-scope > h1','Playlytics');
    });
    it('should go to search page', function () {
		searchPage.clickSearch();
		common.assertTextByCss('body > div.container > div > h2','Search Page');
    });
    it('should show list for query "a" ', function () {
		searchPage.clickSearch();
		searchPage.fillSearchInput('a');
		searchPage.clickSearchButton();
		browser.pause();
    });

});

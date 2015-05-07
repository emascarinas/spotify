'use strict';
var Common = require('../e2e/commonPage.js');

var Search = function () {
    var common = new Common();
    var self = this;
	
    this.fillSearchInput = function (q) {
        element(by.model('searchStr')).clear().sendKeys(q);
    };
    this.clickSearch = function () {
        common.clickByCss('#navbar > ul > li:nth-child(2) > a');
    };
	this.clickHome = function () {
        common.clickByCss('#navbar > ul > li:nth-child(1) > a');
    };		
    this.clickSearchButton = function () {
        common.clickByCss('#form-search > button');
    };
    this.mockSearch = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(
                    function ($httpBackend, config, getSearchResults, util) {
                        $httpBackend.whenGET('https://api.spotify.com/v1/search?q=a&type=track&offset=0&limit=20').respond(getSearchResults);
						$httpBackend.whenGET('https://api.spotify.com/v1/search?q=a&type=track').respond(getSearchResults);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    };
};
module.exports = Search;
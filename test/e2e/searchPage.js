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
    this.clickSearchButton = function () {
        common.clickByCss('#form-search > button');
    };
    this.mockLoginSuccess = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(
                    function ($httpBackend, getAccounts, getAccount, configuration, getAccessKeyID, getInvoices, getRenewalRates, getRenewalTerms, renewRate,
                            getPaymentSetupInfo, getPaymentReviewInfo, makeCCPayment, makeACHPayment, addAccountForm, addAccount200, getEbillingMap200) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(getAccessKeyID);
                        $httpBackend.whenGET(configuration.getAccountUrl()).respond(getAccounts);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber).respond(getAccount);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/invoice').respond(getInvoices);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/rates').respond(getRenewalRates);
                        $httpBackend.whenGET(configuration.getAccountUrl() + getAccount.accountNumber + '/rates/6_mo_Saver/asserts').respond(getRenewalTerms);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    };
    this.mockLoginError = function () {
        var httpBackendMock = function () {
            angular.module('httpBackendMock', ['ngMockE2E'])
                    .run(function ($httpBackend, configuration, invalidUsernamePassword) {
                        $httpBackend.whenPOST(configuration.getAccountUrl()).respond(401,invalidUsernamePassword);
                        $httpBackend.whenGET(/.*/).passThrough();
                    });
        };
        browser.addMockModule('httpBackendMock', httpBackendMock);
    }    
};

module.exports = Search;
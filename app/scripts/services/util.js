'use strict';

angular.module('spotifyApp')
        .service('util', function Util($window, session) {
            this.redirect = function (url) {
                $window.location.replace(url);
            };
            this.buildParam = function (param) {
                return $.param(param); // jshint ignore:line
            };
            this.isEmptyToken = function () {
                return undefined === session.getAccessToken() && undefined !== session.getCode();
            };
           
        });

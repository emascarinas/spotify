'use strict';

angular.module('spotifyApp')
        .service('util', function Util($window, session) {
            this.redirect = function (url) {
                $window.location.replace(url);
            };
            this.buildParam = function (param){
                return $.param(param);
            }
            this.isAuthenticated = function(){
                return undefined !== session.getProfile() && undefined !== session.getCode;
            }
        });

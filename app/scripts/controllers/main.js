'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
        .controller('MainCtrl', function (session, $location, util, user) {
            var re = new RegExp('code=(.*)#\/');
            var code = $location.absUrl().match(re);
            if (undefined === session.getCode() && null !== code) {
                session.setCode(code);
            }
            if (util.isEmptyToken()) {
                session.setCode(code[1]);
                user.getAccessToken().success(function (data) {
                    session.setAccessToken(data.access_token); // jshint ignore:line
                    console.log(session.getAccessToken());
                }).error(function (data) {
                    console.log(data);
                });
            }
        });
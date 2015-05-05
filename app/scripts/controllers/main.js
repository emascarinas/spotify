'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
        .controller('MainCtrl', function ($scope, session, $location, util, user) {
            var re = new RegExp('code=(.*)#\/');
            var code = $location.absUrl().match(re);
            if (undefined === session.getCode() && null !== code) {
                session.setCode(code);
            }
            $scope.profile = session.getProfile();
            console.log($scope.profile);
            if (util.isEmptyToken()) {
                session.setCode(code[1]);
                user.getAccessToken().success(function (data) {
                    session.setAccessToken(data.access_token); // jshint ignore:line
                    user.getMeProfile().success(function (data) {
                        session.setProfile(data);
                        $scope.profile = session.getProfile();
                    }).error(function (data) {
                        console.log(data);
                    });

                }).error(function (data) {
                    console.log(data);
                });
            }
        });

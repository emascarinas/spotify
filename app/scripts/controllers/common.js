'use strict';

angular.module('spotifyApp')
        .controller('CommonCtrl', function ($scope, $location, localStorage) {
            localStorage.init();
            $scope.goSearch = function () {
                $location.search('query', $scope.query);
                $location.path('search');
            };
        });

'use strict';

angular.module('spotifyApp')
        .controller('CommonCtrl', function ($scope, $location) {
            $scope.goSearch = function () {
                $location.search('query', $scope.query);
                $location.path('search');
            };
            localStorage.setItem('bgcolor','sdf');
        });

'use strict';

angular.module('spotifyApp')
        .controller('PlaylistCtrl', function ($scope, localStorage) {
            function computeTotal() {
                $scope.total = 0;
                if ($scope.songs.length) {
                    $scope.total = $scope.songs.reduce(function (a, b) {
                        return a + b.duration_ms; // jshint ignore:line
                    },0);
                }
            }
            $scope.songs = localStorage.getData();
            computeTotal();
            $scope.clear = function () {
                localStorage.setData([]);
                $scope.songs = localStorage.getData();
                computeTotal();
            };
            $scope.sortableOptions = {
                stop: function () {
                    localStorage.setPlaylist($scope.songs);
                }
            };
            $scope.remove = function (song) {
                var index = $scope.songs.indexOf(song);
                $scope.songs.splice(index, 1);
                computeTotal();
                localStorage.setPlaylist($scope.songs);
            };


        });


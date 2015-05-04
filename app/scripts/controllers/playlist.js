'use strict';

angular.module('spotifyApp')
        .controller('PlaylistCtrl', function ($scope, localStorage) {
            $scope.songs = localStorage.getData();
            $scope.clear = function () {
                localStorage.setData([]);
                $scope.songs = localStorage.getData();
            };
            $scope.sortableOptions = {
                stop: function (e, ui) {
                    localStorage.setPlaylist($scope.songs);
                }
            };
            $scope.remove = function(song){
                var index = $scope.songs.indexOf(song);
                $scope.songs.splice(index,1);
            };

        });


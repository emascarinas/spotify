'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, $routeParams, localStorage, util) {
            $scope.songs = {selected: []};
            song.search($routeParams.query).success(function (data) {
                $scope.response = data;
                console.log(data);
            }).error(function (data) {
                console.log(data);
            });
            $scope.checkAll = function () {
                $scope.songs.selected = angular.copy($scope.response.tracks.items);
            };
            $scope.uncheckAll = function () {
                $scope.songs.selected = [];
            };
            $scope.addPlaylist = function () {
                console.log($scope.playlistName);
                if (!$scope.playlistName) {
                    util.showError({error_name: 'Error', error_message: 'Playlist name required.'});
                }
                else {
                    var playlist = {
                        name: $scope.playlistName,
                        songs: $scope.songs.selected
                    }
                    localStorage.setPlaylist(playlist);
                }
            };


        });

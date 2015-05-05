'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, $routeParams, localStorage, util, $location) {
            var query;
            $scope.songs = {selected: []};

            $scope.checkAll = function () {
                $scope.songs.selected = angular.copy($scope.songList);
            };
            $scope.uncheckAll = function () {
                $scope.songs.selected = [];
            };
            $scope.addPlaylist = function () {
                if (!$scope.songs.selected.length) {
                    util.showError({errorName: 'Error', errorMessage: 'Select a song'});
                }
                else {
                    localStorage.setPlaylist($scope.songs.selected);
                    $location.path('playlist');
                }
            };
            $scope.remoteUrlRequestFn = function (str) {
                return {q: str,
                    type: 'track'};
            };
            $scope.selectedSong = function (song) {
                $scope.songList = [song.originalObject];
            };
            $scope.goSearch = function () {
                if(undefined !== query && query.length) {
                    fetch(query);
                }else {
                    util.showError({errorName:'Error', errorMessage: 'Search value required'});
                }
            };
            $scope.inputChanged = function (str) {
                query = str;
            };
            function fetch(str) {
                song.search(str).success(function (data) {
                    $scope.songList = data.tracks.items;
                }).error(function (data) {
                    console.log(data);
                });
            }



        });

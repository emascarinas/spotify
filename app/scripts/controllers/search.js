'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, localStorage, util, $location, config) {
            $scope.songs = {selected: []};
            $scope.songList = [];
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
                    var playlist = localStorage.getData();
                    localStorage.setData(playlist.concat($scope.songs.selected));
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
                $scope.query = $scope.songList.length === 1 ? $scope.songList[0].name : $scope.query;
                if (undefined !== $scope.query && $scope.query.length) {
                    fetch($scope.query,util.computeOffset($scope.currentPage),config.itemsPerPage);
                } else {
                    util.showError({errorName: 'Error', errorMessage: 'Search value required'});
                }
            };
            $scope.pageChanged = function () {
                
                fetch($scope.query,util.computeOffset($scope.currentPage),config.itemsPerPage);
            };
            $scope.inputChanged = function (str) {
                $scope.songList = [];
                $scope.currentPage = 1;
                $scope.totalItems = 0;
                $scope.query = str;
            };
            function fetch(str,offset,limit) {
                song.search(str,offset,limit).success(function (data) {
                    $scope.songList = data.tracks.items;
                    $scope.totalItems = data.tracks.total;
                }).error(function (data) {
                    console.log(data);
                });
            }



        });

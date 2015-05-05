'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, localStorage, util, $location, config, session) {
            console.log(session.getProfile());
            var query;
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
                query = $scope.songList.length === 1 ? $scope.songList[0].name : query;
                if (undefined !== query && query.length) {
                    fetch(query,util.computeOffset($scope.currentPage),config.itemsPerPage);
                } else {
                    util.showError({errorName: 'Error', errorMessage: 'Search value required'});
                }
            };
            $scope.pageChanged = function () {
                
                fetch(query,util.computeOffset($scope.currentPage),config.itemsPerPage);
            };
            $scope.inputChanged = function (str) {
                $scope.songList = [];
                $scope.currentPage = 1;
                $scope.totalItems = 0;
                query = str;
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

'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, $routeParams, localStorage, util, $location) {
            $scope.songs = {selected: []};
            song.search($routeParams.query).success(function (data) {
                $scope.response = data;
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
                if(!$scope.songs.selected.length) {
                    util.showError({error_name: 'Error', error_message: 'Select a song'}); // jshint ignore:line
                }
                else {
                    localStorage.setPlaylist($scope.songs.selected);
                    $location.path('playlist');
                }
            };


        });

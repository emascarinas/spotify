'use strict';

angular.module('spotifyApp')
        .controller('SearchCtrl', function ($scope, song, $routeParams, $modal) {
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
                var myModal = $modal({title: 'My Title', content: 'My Content', show: true});

            
            };
            
            
        });

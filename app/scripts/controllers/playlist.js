'use strict';

angular.module('spotifyApp')
        .controller('PlaylistCtrl', function ($scope, localStorage) {
            $scope.playlists = localStorage.getData();
            $scope.clear = function(){
                localStorage.clear();
                $scope.playlists = localStorage.getData();
            };
        });
        

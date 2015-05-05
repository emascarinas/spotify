'use strict';

angular.module('spotifyApp')
        .controller('CommonCtrl', function ($scope, $location, song, localStorage) {
            localStorage.init();
        });

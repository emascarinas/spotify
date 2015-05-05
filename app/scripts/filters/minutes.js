'use strict';

angular.module('spotifyApp')
        .filter('minutes', function () {
            return function (input) {
                var minutes = Math.floor(input / 60000);
                var seconds = ((input % 60000) / 1000).toFixed(0);
                return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
            };
        });

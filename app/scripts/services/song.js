'use strict';

angular.module('spotifyApp')
        .factory('song', function ($http, config, localStorage) {
            return {
                search: function (q) {
                    return $http.get(config.apiUrl + config.searchEnd + '?q=' + q + '&type=track');
                }
            };
        });

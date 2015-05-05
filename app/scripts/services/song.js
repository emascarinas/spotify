'use strict';

angular.module('spotifyApp')
        .factory('song', function ($http, config, util) {
            return {
                search: function (q,offset,limit) {
                    var param = util.buildParam({
                        q: q,
                        type: 'track',
                        offset: offset,
                        limit: limit
                    });
                    return $http.get(config.apiUrl + config.searchEnd + '?' + param);
                }
            };
        });

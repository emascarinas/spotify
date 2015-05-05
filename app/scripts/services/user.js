'use strict';
angular.module('spotifyApp')
        .factory('user', function (config, $http, session) {
            return {
                getAccessToken: function () {
                    var url = config.accountUrl + config.tokenEnd;
                    var param = 'grant_type=authorization_code' + '&code=' + session.getCode() + '&redirect_uri=' + config.redirectUri;
                    return $http.post(config.curlUrl, {url: url, param: param});
                },
                getMeProfile: function(){
                    return $http.get(config.apiUrl + config.meEnd,{headers:{'Authorization':'Bearer ' + session.getAccessToken()}});
                }
            };
        });

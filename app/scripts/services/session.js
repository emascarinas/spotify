'use strict';

angular.module('spotifyApp')
  .factory('session', function () {
      var code, profile, accessToken;
      return {
          getProfile: function(){
              return profile;
          },
          setProfile: function(value) {
              profile = value;
          },
          getCode: function(){
              return code;
          },
          setCode: function(value) {
              code = value;
          },
          getAccessToken: function(){
              return accessToken;
          },
          setAccessToken: function(value) {
              accessToken = value;
          }
      }
  });

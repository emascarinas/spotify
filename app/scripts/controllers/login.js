'use strict';

angular.module('spotifyApp')
        .controller('LoginCtrl', function (config, util) {
            var param = {
                client_id: config.clientId, // jshint ignore:line
                response_type: 'code', // jshint ignore:line
                redirect_uri: config.redirectUri, // jshint ignore:line
                scope: config.scopes,
                show_dialog: true // jshint ignore:line
            };
            util.redirect(config.accountUrl + config.authorizeEnd + '/?' + util.buildParam(param));
        });

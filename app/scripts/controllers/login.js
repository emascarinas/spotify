'use strict';

angular.module('spotifyApp')
        .controller('LoginCtrl', function (config, util) {
            var param = {
                client_id: config.clientId,
                response_type: 'code',
                redirect_uri: config.redirectUri,
                scope: config.scopes,
                show_dialog: true
            };
            util.redirect(config.accountUrl + config.authorizeEnd + '/?' + util.buildParam(param));
        });

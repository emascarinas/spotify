'use strict';

angular.module('spotifyApp')
        .service('util', function Util($window, session, $modal, config) {
            this.redirect = function (url) {
                $window.location.replace(url);
            };
            this.buildParam = function (param) {
                return $.param(param); // jshint ignore:line
            };
            this.isEmptyToken = function () {
                return undefined === session.getAccessToken() && undefined !== session.getCode();
            };
            this.showError = function (err) {
                $modal.open({
                    templateUrl: 'erroModal.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'sm',
                    resolve: {
                        error: function () {
                            return err;
                        }
                    }
                });
            };
            this.computeOffset = function (page) {
                if (page === 1) {
                    return 0;
                } else {
                    return (page-1) * config.itemsPerPage;
                }
            };
        });

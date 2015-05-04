'use strict';

angular.module('spotifyApp')
        .service('localStorage', function () {
            var self = this;
            this.init = function () {
                if (!localStorage.getItem('data')) {
                    localStorage.setItem('data', JSON.stringify([]));
                }
            };
            this.getData = function () {
                return JSON.parse(localStorage.getItem('data'));
            };
            this.setData = function (data) {

                return localStorage.setItem('data', JSON.stringify(data));
            };
            this.setPlaylist = function (playlist) {
                self.setData(playlist);
            };
            this.clear = function () {
                localStorage.clear();
            };
        });

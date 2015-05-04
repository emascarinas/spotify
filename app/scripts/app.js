'use strict';

/**
 * @ngdoc overview
 * @name spotifyApp
 * @description
 * # spotifyApp
 *
 * Main module of the application.
 */
angular
        .module('spotifyApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'angular-loading-bar',
            'checklist-model',
            'mgcrea.ngStrap'
        ])
        .constant('config', {
            clientId: '84239147f2e54cfca600f89fade24f71',
            clientSecret: 'f67c24958fa24a709bafe4868e7bad72',
            redirectUri: 'http://localhost:9000/#/',
            scopes: 'user-read-private user-read-email',
            accountUrl: 'https://accounts.spotify.com',
            authorizeEnd: '/authorize',
            tokenEnd: '/api/token',
            apiUrl: 'https://api.spotify.com/v1',
            searchEnd: '/search',
            curlUrl: 'http://dunggoanan.com/curlspo.php'
        })
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    })
                    .when('/login', {
                        templateUrl: 'views/about.html',
                        controller: 'LoginCtrl'
                    })
                    .when('/search', {
                        templateUrl: 'views/search.html',
                        controller: 'SearchCtrl'
                    })
                    .when('/playlist', {
                        templateUrl: 'views/playlist.html',
                        controller: 'PlaylistCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });

'use strict';

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
            'ui.bootstrap',
            'ui.sortable',
            'angucomplete-alt'
        ])
        .constant('config', {
            clientId: '84239147f2e54cfca600f89fade24f71',
            clientSecret: 'f67c24958fa24a709bafe4868e7bad72',
            redirectUri: 'http://localhost:9000/#/',
            scopes: 'user-read-private user-read-email',
            accountUrl: 'https://accounts.spotify.com',
            authorizeEnd: '/authorize',
            tokenEnd: '/api/token',
            itemsPerPage: 20,
            pageMaxSize: 5, //for navigator number of page number shown            
            apiUrl: 'https://api.spotify.com/v1',
            meEnd: '/me',
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

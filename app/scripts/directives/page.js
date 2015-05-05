'use strict';

angular.module('spotifyApp')
        .directive('spotifyPaginator', function() {
            return {
                templateUrl: 'views/paginator.html',
                restrict: 'E'
            };
        });

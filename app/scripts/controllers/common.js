'use strict';

angular.module('spotifyApp')
        .controller('CommonCtrl', function ($scope, config, localStorage) {
            localStorage.init();
    
            $scope.currentPage = 1;
            $scope.maxSize = config.pageMaxSize;
            $scope.itemsPerPage = config.itemsPerPage;
            $scope.boundaryLinks = true;
            $scope.rotate = false;

        });

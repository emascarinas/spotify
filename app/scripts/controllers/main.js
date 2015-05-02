'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

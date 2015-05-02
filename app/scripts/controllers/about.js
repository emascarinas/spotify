'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spotifyApp
 */
angular.module('spotifyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

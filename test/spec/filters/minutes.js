'use strict';

describe('Filter: minutes', function () {

  // load the filter's module
  beforeEach(module('spotifyApp'));

  // initialize a new instance of the filter before each test
  var minutes;
  beforeEach(inject(function ($filter) {
    minutes = $filter('minutes');
  }));

  it('should return the input prefixed with "minutes filter:"', function () {
    var text = 'angularjs';
    expect(minutes(text)).toBe('minutes filter: ' + text);
  });

});

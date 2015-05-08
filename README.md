# Spotify-Playlytics [![Build Status](https://travis-ci.org/emascarinas/spotify.svg?branch=master)](https://travis-ci.org/emascarinas/spotify) [![Coverage Status](https://coveralls.io/repos/emascarinas/spotify/badge.svg)](https://coveralls.io/r/emascarinas/spotify)

Live site: http://emascarinas.github.io/spotify/

### About the site
In-depth analytics and reporting capabilities on your favorite playlists using Spotify’s Web API.
* https://developer.spotify.com/web-api/

#### App Features:
* Allows users to search - with auto-completion.
* Having found matching songs, add them to an organized playlist displaying their duration and popularity.
* Allows users to reorder songs and remove them.
* Display the Total Duration of the playlist.
* Calculate and display the Coolness Factor of that playlist
* Persist playlists to Local Storage

### Technologies used:
* AngularJS
* Twitter Bootstrap
* Sass

### Added features:
* Login to show user profile with image if available. Making use of access token.
* Drag and drop on re ordering songs
* Fully responsive layout
* Loading indicator
* Global error handler
* Paginator
* unit test using karma test runner and jasmine with istanbul as code coverage. Using mock data sets.
  * $ grunt test 
* end to end test using protractor and jasmine. Using mock data sets including assert values.
  * $ webdriver-manager start
  * $ grunt serve
  * $ protractor
* travis ci and coverall - only had intial test running, will add more soon. Click on badges above to see details.
  * https://travis-ci.org/emascarinas/spotify
  * https://coveralls.io/r/emascarinas/spotify
* grunt build system, npm/bower
  * $ grunt (will create 'dist' folder)






angular.module('mockedData', [])
		.value('getSearchResults', {"tracks":{"href":"https://api.spotify.com/v1/search?query=bentom+kaj&offset=0&limit=20&type=track","items":[{"album":{"album_type":"single","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1pbhUgiaOa7tEEJMQDmZle"},"href":"https://api.spotify.com/v1/albums/1pbhUgiaOa7tEEJMQDmZle","id":"1pbhUgiaOa7tEEJMQDmZle","images":[{"height":600,"url":"https://i.scdn.co/image/89972308dada30f66e0c4bbbc8002723b3f7a895","width":600},{"height":300,"url":"https://i.scdn.co/image/6b22670574e0c9687030862c8335906e3667a18f","width":300},{"height":64,"url":"https://i.scdn.co/image/2f1f6b957e6a7e47ba2099e22f45d058b6ca4512","width":64}],"name":"Freak Out Together","type":"album","uri":"spotify:album:1pbhUgiaOa7tEEJMQDmZle"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5dObeDNRUTeZ8170UOiQe9"},"href":"https://api.spotify.com/v1/artists/5dObeDNRUTeZ8170UOiQe9","id":"5dObeDNRUTeZ8170UOiQe9","name":"Neil Bentom feat. ElleDorada, Frago Leena & Keei Kaj","type":"artist","uri":"spotify:artist:5dObeDNRUTeZ8170UOiQe9"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":205214,"explicit":false,"external_ids":{"isrc":"CH6540831725"},"external_urls":{"spotify":"https://open.spotify.com/track/0pqmy7rOrGUDZeC8A7wukU"},"href":"https://api.spotify.com/v1/tracks/0pqmy7rOrGUDZeC8A7wukU","id":"0pqmy7rOrGUDZeC8A7wukU","name":"Freak Out Together","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/0bdebcbe657a44a679c7dd1ede9f7f7afb2b73e6","track_number":1,"type":"track","uri":"spotify:track:0pqmy7rOrGUDZeC8A7wukU"},{"album":{"album_type":"single","available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"external_urls":{"spotify":"https://open.spotify.com/album/1pbhUgiaOa7tEEJMQDmZle"},"href":"https://api.spotify.com/v1/albums/1pbhUgiaOa7tEEJMQDmZle","id":"1pbhUgiaOa7tEEJMQDmZle","images":[{"height":600,"url":"https://i.scdn.co/image/89972308dada30f66e0c4bbbc8002723b3f7a895","width":600},{"height":300,"url":"https://i.scdn.co/image/6b22670574e0c9687030862c8335906e3667a18f","width":300},{"height":64,"url":"https://i.scdn.co/image/2f1f6b957e6a7e47ba2099e22f45d058b6ca4512","width":64}],"name":"Freak Out Together","type":"album","uri":"spotify:album:1pbhUgiaOa7tEEJMQDmZle"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5dObeDNRUTeZ8170UOiQe9"},"href":"https://api.spotify.com/v1/artists/5dObeDNRUTeZ8170UOiQe9","id":"5dObeDNRUTeZ8170UOiQe9","name":"Neil Bentom feat. ElleDorada, Frago Leena & Keei Kaj","type":"artist","uri":"spotify:artist:5dObeDNRUTeZ8170UOiQe9"}],"available_markets":["AD","AR","AT","AU","BE","BG","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","EC","EE","ES","FI","FR","GB","GR","GT","HK","HN","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","MX","MY","NI","NL","NO","NZ","PA","PE","PH","PL","PT","PY","RO","SE","SG","SI","SK","SV","TR","TW","US","UY"],"disc_number":1,"duration_ms":224000,"explicit":false,"external_ids":{"isrc":"CH6540831726"},"external_urls":{"spotify":"https://open.spotify.com/track/1PdwgRAHYjWLlwMPW3dvb4"},"href":"https://api.spotify.com/v1/tracks/1PdwgRAHYjWLlwMPW3dvb4","id":"1PdwgRAHYjWLlwMPW3dvb4","name":"majority.co","popularity":0,"preview_url":"https://p.scdn.co/mp3-preview/0d86c019e13292b35b4c2e055cf8f532c0d4f4b5","track_number":2,"type":"track","uri":"spotify:track:1PdwgRAHYjWLlwMPW3dvb4"}],"limit":20,"next":null,"offset":0,"previous":null,"total":2}})
		.value('assertValues',{h1:'Playlytics',h2:'Search Page',songName:'majority.co', total: 429214, errorMess: 'Search value required', errorSong: 'Select a song'})	
;



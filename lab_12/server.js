var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

app.use(express.static('public'))

var spotifyApi = new SpotifyWebApi({

    clientId: '5916dd2a78744634b08e5313b7c66f73',
    clientSecret: '193db95c4caa4994b41e71069564db8c'

});

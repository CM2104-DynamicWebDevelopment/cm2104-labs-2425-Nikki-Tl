var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

app.use(express.static('public'))

var spotifyApi = new SpotifyWebApi({

    clientId: '5916dd2a78744634b08e5313b7c66f73',
    clientSecret: '193db95c4caa4994b41e71069564db8c'

});



// Retrieve an access token
spotifyApi.clientCredentialsGrant().then( 
    function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']); 
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message 
        );
    }
);


async function getTracks(searchterm, res) { 
    spotifyApi.searchTracks(searchterm).then(function (data) {
        res.send(JSON.stringify(data.body));
    }, function (err) {
        console.error(err);
    }); 
}
   


//route for love in tracks, artists and albums
app.get('/searchLove', function (req, res) {
    getTracks('love', res);
});  



app.listen(8080);
   
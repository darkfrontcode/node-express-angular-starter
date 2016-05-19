var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(){
	console.log("Server listening on port 3000.");
});

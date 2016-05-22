var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    routes      = require('./routes/routes'),
    app         = express(),
    port        = process.env.PORT || 3000,
    environment = process.env.NODE_ENV || 'development';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(bodyParser.json());
// app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(port, function(){
	console.log("Express server listening on port "+ port +" in "+ environment +" mode");
});

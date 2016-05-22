var express     = require('express'),
    path        = require('path'),
    routes      = require('./routes/routes'),
    app         = express(),
    port        = process.env.PORT || 3000;

//config:view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//config:tools
app.use(express.bodyParser());
app.use(express.methodOverride());

//config:environment
app.use(express.static(path.join(__dirname, 'public')));

//config:routes
app.use(routes);

//listener
app.listen(port, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

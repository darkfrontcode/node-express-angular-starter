var express             = require('express'),
    path                = require('path'),
    bodyParser          = require('body-parser'),
    routes              = require('./routes/routes'),
    stylus              = require('stylus'),
    nib                 = require('nib'),
    stylus_compiler     = require('./stylus_compiler'),
    app                 = express(),
    port                = process.env.PORT || 3000,
    environment         = process.env.NODE_ENV || 'development';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(stylus.middleware({
    src: path.join(__dirname, 'stylus'),
    dest: path.join(__dirname, 'public/css'),
    compile: stylus_compiler
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(port, function(){
	console.log("Express server listening on port "+ port +" in "+ environment +" mode");
});

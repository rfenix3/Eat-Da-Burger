// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// Import router and give the server access to them.
var router = require("./controllers/burgersController.js");

// Create express app instance.
var app = express();
// Specify the port.
var port = 3000;

// app/public now becomes the root that is accessible to the main application.
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000 );

app.use("/", router);

// Listen to port connection.
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// reload allows auto-refresh of server if there are changes in pre-identified files (without using ^C.)
// Used only during development. Comment out after passing final testing.
// var reload = require('reload');
// reload(app);

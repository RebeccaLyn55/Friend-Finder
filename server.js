//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

//Instantiate Express
var app = express(); 

//Dynamic port for Heroku
var port = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
app.listen(port, function(){
	console.log('Listening on port ' + port);
})

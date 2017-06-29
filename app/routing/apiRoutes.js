//Load Data (from friends.js)
var tableData = require("../data/friends.js");


//Routing
module.exports = function(app) {

// API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });


//API Post Requests
app.post("/api/friends", function(req, res) {

	//Logic for finding 'best match' which will use 'totalDifference variable'
// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");


// Require Schemas
var models = require("./models");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
// Seed files- remember to remove before deploying
var testing = require("./db.js");
var testjoin = require("./db2.js");
// Routes
require("./routes/api-delete-routes.js");
require("./routes/api-get-routes.js");
require("./routes/api-post-routes.js");
require("./routes/api-put-routes.js");
require("./routes/html-routes.js");

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


//Connect to Sequelize and begin server listening
models.sequelize.sync({force: true}).then(function(){
  app.listen(port, function(){
    console.log('Server successfully connected on PORT %s', port);
    testing().then(testjoin);
    // testjoin();
  });
});
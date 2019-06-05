    
var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();

var methodOverride = require('method-override');

app.use(methodOverride('_method'));

//display static content from "public" directory in the application directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("main server.js listening on: http://localhost:" + PORT);
}); 
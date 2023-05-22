const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const path = require('path');

app.set("port", process.env.PORT || 4000);
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));

app.set('views', path.join(__dirname, 'views'));

//Setting template engine
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("about");
})

app.get("/skills", function(req, res){
    res.render("skills");
})

app.get("/projects", function(req, res){
    res.render("projects");
})

app.get("/education", function(req, res){
    res.render("education");
})

app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:" + app.get("port") +"; press Ctrl-C to terminate." );
});

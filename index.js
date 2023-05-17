const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();

app.set("port", process.env.PORT || 4000);
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));

//Setting template engine
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("about");
})


app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:" + app.get("port") +"; press Ctrl-C to terminate." );
});
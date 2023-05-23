const express = require("express"),
    expressHandlebars = require("express-handlebars"),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Users = require('./models/userInfo');

    // load env variables
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

//db connection
mongoose
	.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
	console.log(`DB connection error: ${err.message}`);
});

app.set("port", process.env.PORT || 4000);
app.engine("handlebars", expressHandlebars.engine({ defaultLayout: "main" }));

app.set('views', path.join(__dirname, 'views'));

//Setting template engine
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

// Endpoints
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

app.get("/contact", function(req, res){
    res.render("contact");
})

app.post("/submit", function(req, res) {
    if (!req.body.uname || !req.body.uemail || !req.body.umessage) { //Making sure that required fields are not empty!
      res.render('contact', { message: 'Required fields cannot be empty!'});
    } 
    else {
      const user = new Users(req.body);
    //   console.log(user.uname);
    //   console.log(user.uemail);
    //   console.log(user.umessage);
      user.save()
        .then(() => {
          res.render('contact', { message: 'Thanks for contacting! Will get in touch soon.' });
        })
        .catch(err => {
          res.status(400).json({ error: err });
        });
    }
  });
  

app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:" + app.get("port") +"; press Ctrl-C to terminate." );
});

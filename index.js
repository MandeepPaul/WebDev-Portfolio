const express = require("express"),
    expressHandlebars = require("express-handlebars"),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    User = require('./models/userInfo'),
    routes = require("./routes/route")(app);

const logger = require('./logger');

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

app.use("/", routes);

app.listen(app.get("port"), function () {
	console.log("Express started on http://localhost:" + app.get("port") +"; press Ctrl-C to terminate." );
});

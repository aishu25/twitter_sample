var express = require("express");
var app = express();
var port = 8000;
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/demoApp/dist/demoApp")));
app.set("views", path.join(__dirname, "./views"));

// mongoose.connect("mongodb://localhost/dummyapp");
// mongoose.connect('mongodb://localhost:27017/dummyapp', { useNewUrlParser: true });
// mongoose.Promise = global.Promise;



// app.all("*", (request,response,next) => {
//   response.sendFile(path.resolve("./public/dist/public/index.html"))
// });

app.listen(port, function(){
	console.log("Listening on the port 8000 for the twitter demo project");
})





















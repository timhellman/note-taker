var express = require("express")
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRoutes = require("./routes/html")



//URL ENCODING FOR BODY PARSING
app.use(express.urlencoded({extended:true}));  //parses the queries sent thru the URL
app.use(express.json())   //changes data to a string
app.use(express.static("public")) //browser uses everything in the public folder & public is always available to the browswer

require("./routes/api")(app)
app.use("/", htmlRoutes)

app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
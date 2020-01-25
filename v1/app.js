var express = require("express");
    app = express();
    bodyParser = require("body-parser");
    port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069__340.jpg"},
  {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/18/15/27/camping-1835352__340.jpg"},
  {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419__340.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  
  // redirect back to campgrounds page 
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.listen(port, function(){
  console.log("The Yelpcamp server has started");
});

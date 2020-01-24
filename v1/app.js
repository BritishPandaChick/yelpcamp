var express = require("express");
    app = express();
    port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req,res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2017/06/17/03/17/gongga-snow-mountain-2411069__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/11/18/15/27/camping-1835352__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419__340.jpg"}
  ];
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  res.send("You hit the post route!");
  // get data from form and add to campgrounds array 
  // redirect back to campgrounds page 
});

app.listen(port, function(){
  console.log("The Yelpcamp server has started");
});

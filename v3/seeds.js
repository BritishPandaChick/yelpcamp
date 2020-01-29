var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg",
        description: "blah blab blah"
    },
    {
        name: "Desert Mesa",
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275__340.jpg",
        description: "blah blab blah"
    },
    {
        name: "Canyon Floor",
        image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg",
        description: "blah blab blah"
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed campgrounds");     
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a new comment");
                            }
                        });
                }
            }); 
        });
    });
}

module.exports = seedDB;
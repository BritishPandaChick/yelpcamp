var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906__340.jpg",
        description: "As he was to begin his journey too early on the morrow to see any of the family, the ceremony of leave-taking was performed when the ladies moved for the night; and Mrs. Bennet, with great politeness and cordiality, said how happy they should be to see him at Longbourn again, whenever his engagements might allow him to visit them."
    },
    {
        name: "Desert Mesa",
        image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867275__340.jpg",
        description: "As he was to begin his journey too early on the morrow to see any of the family, the ceremony of leave-taking was performed when the ladies moved for the night; and Mrs. Bennet, with great politeness and cordiality, said how happy they should be to see him at Longbourn again, whenever his engagements might allow him to visit them."
    },
    {
        name: "Canyon Floor",
        image: "https://cdn.pixabay.com/photo/2015/03/26/10/29/camping-691424_960_720.jpg",
        description: "As he was to begin his journey too early on the morrow to see any of the family, the ceremony of leave-taking was performed when the ladies moved for the night; and Mrs. Bennet, with great politeness and cordiality, said how happy they should be to see him at Longbourn again, whenever his engagements might allow him to visit them."
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
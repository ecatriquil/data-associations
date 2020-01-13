const mongoose = require('mongoose');
const Post = require('./models/post');
const User =  require('./models/user');

const db = require('./config/keys').MongoURI;

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

// User.create({
//     email:'bob@gmail.com',
//     name:'Bob Belcher'
// })

Post.create({
    title:'How to p2',
    content:'DFJSJFS'
}, function(err, post){
    User.findOne({email: 'bob@gmail.com'}, function(err, foundUser){
        if (err) {
            console.log(err);
            
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if (err) {
                    console.log(err);
                    
                } else{
                    console.log(data);
                    
                }
            });
        }
    })
});

// Find User
// Find all post for that user

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user){
    if (err) {
       console.log(err)
    } else{
        console.log(user)
    }
});
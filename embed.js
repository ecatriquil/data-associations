const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const newUser = new User({
    email:'hermioni@hogwarts.edu',
    name:'Hermioni Granger'
});

newUser.posts.push({
    title:'A potion',
    content: 'Jeje'
})

newUser.save(function(err, user){
    if (err) {
        console.log(err);
        
    } else {
      console.log(user);
        
    }
});

// const newPost = new Post({
//     title:'Apples',
//     content:'are red'
// });

// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log(post);
        
//     }
// });
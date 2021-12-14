//Heroku link 
//place link here!

const express = require("express"); 
const app = express(); 
const port = process.env.PORT || 4000; 

const firebase = require("firebase/app"); 

//Firebase configuration object 
const firebaseConfig = {
    apiKey: "AIzaSyCAjO6OFSY8zUcmVfN_V97cuTkfMe2Tvzg",
    authDomain: "final-project-d53d7.firebaseapp.com",
    projectId: "final-project-d53d7",
    storageBucket: "final-project-d53d7.appspot.com",
    messagingSenderId: "1013549518376",
    appId: "1:1013549518376:web:cc25c5a18c806f5ffdaf1d"
};

firebase.initializeApp(firebaseConfig); 

const indexRoute = require('./routes/index.js'); 
const postRoute = require('./routes/post')
const createPostRoute = require('./routes/createPost');

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"); 
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "X-Requested-With, content-type"
    ); 
    next(); 
}); 

app.use('/', indexRoute); 
app.use('/gif', postRoute); 
app.use('/create', createPostRoute); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
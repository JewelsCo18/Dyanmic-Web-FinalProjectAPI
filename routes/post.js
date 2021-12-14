const express = require('express'); 
const router = express.Router(); 
const firestore = require("firebase/firestore"); 
const { route } = require('.');
const db = firestore.getFirestore(); 

//default
router.get('/', (req, res) =>{
    res.send(`Please include an ID`); 
}); 

router.get('/:id', (req, res) =>{
    const postId = req.params.id; 
    const gif = firestore.getDoc(firestore.doc(db, "gifs", postId)); 

    gif
        .then((response) => {
            const gifPost = response.data(); 
            if(gifPost) {
                res.send(gifPost); 
            } else {
                return res.send({imageCaption: "No document!"}); 
            }  
        }).catch((error) => {
            res.send(error); 
        })
}); 

module.exports = router; 
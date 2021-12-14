const express = require('express'); 
const router = express.Router();
const firestore = require('firebase/firestore'); 
const db = firestore.getFirestore(); 

router.get("/", (req, res) => {
    const queryParams = req.query;
    const imageAlt = queryParams.imageAlt; 
    const imageSrc = queryParams.imageSrc; 
    const imageCaption = queryParams.imageCaption; 
    const imageTag = queryParams.imageTag; 
    const imageTitle = queryParams.imageTitle; 
    const userID = queryParams.uid; 
    const displayName = queryParams.name; 

    const setGifPost = firestore.addDoc(firestore.collection(db, "gifs"), {
        imageAlt, 
        imageSrc, 
        imageCaption,
        imageTag, 
        imageTitle, 
        userID, 
        displayName
    }); 

    setGifPost
        .then((response) => {
            res.send(response)
        })
        .catch((error) => {
            console.warn(error); 
            res.send(error); 
        }); 
}); 

module.exports = router; 
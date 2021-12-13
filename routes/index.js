const express = require('express'); 
const router = express.Router(); 
const firestore = require("firebase/firestore"); 
const db = firestore.getFirestore(); 

router.get('/', (req, res) =>{
    const gifs = firestore.getDocs(firestore.collection(db, "gifs")); 
    const gifArray = []; 

    gifs 
        .then((response) => { 
            response.forEach((doc) => {
                gifArray.push(doc.data()); 
            })
            return res.send(gifArray); 
        })
        .catch(function (error) {
            console.log("Error: ", error); 
            return res.send(error); 
        });
}); 

module.exports = router; 
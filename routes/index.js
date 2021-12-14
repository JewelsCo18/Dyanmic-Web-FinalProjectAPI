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
                const docData = doc.data(); 
                docData.id = doc.id; 
                gifArray.push(docData); 
            }); 
            return res.send(gifArray); 
        })
        .catch(function (error) {
            console.log("Error: ", error); 
            return res.send(error); 
        });
}); 

module.exports = router; 
import * as functions from "firebase-functions";

// import * as admin from "firebase-admin";
// THIS IS FOR ACCESS TO FIRESTORE AS ADMIN FROM FUNCTION
// admin.initializeApp();

export const basicHTTP = functions.https.onRequest((req,res) => {
  
  // get req info from (body, query, headers, etc.)
  const name = req.query.name
  
  if(!name) {
    res.status(400).send('ERROR - Gotta add a name as query param')
  } else {
    res.send(`What's good from COWRY - ${name}`)
  }
  
})
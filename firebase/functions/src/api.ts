import * as functions from "firebase-functions";

// import * as admin from "firebase-admin";
// THIS IS FOR ACCESS TO FIRESTORE AS ADMIN FROM FUNCTION
// admin.initializeApp();

// import cors from  "cors";
import * as express from  "express";

const app = express();
// app.use(cors())
// app.use(cors({origin: true}))

// AUTH CUSTOM MIDDLEWARE
// const auth = (req, res, next) => {

//   if(!req.header.authorization) {
//     res.status(400).send('unauthorized')
//   }

//   // use this when we're done to keep the response flowing
//   next()
// }


app.get('/lion', (req, res) => {

  res.send('LION')
})

app.get('/tiger', (req, res) => {

  res.send('TIGER')
})


export const api = functions.https.onRequest(app);
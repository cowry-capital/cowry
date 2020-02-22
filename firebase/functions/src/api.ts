import * as functions from "firebase-functions";

import * as admin from "firebase-admin";
// THIS IS FOR ACCESS TO FIRESTORE AS ADMIN FROM FUNCTION
admin.initializeApp();

import * as express from  "express";

const app = express();

app.get('/lion', (req, res) => {

  res.send('LION')
})

app.get('/tiger', (req, res) => {

  res.send('TIGER')
})


export const api = functions.https.onRequest(app);
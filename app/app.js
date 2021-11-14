//Setup express and firebase
import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore';

//env setup
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

//Firebase Config
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_NAME + ".firebaseapp.com",
  projectId: process.env.PROJECT_ID,
};

//start firestore
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();



//Setup pug
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.send("Hello there main page!")
});

app.get("/pug", function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Start listening on port 3000.
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`));


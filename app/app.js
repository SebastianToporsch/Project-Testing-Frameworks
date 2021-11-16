//Setup express and firebase
import express from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

//env setup
import dotenv from 'dotenv';
import { async } from '@firebase/util';
dotenv.config();

const app = express();
const port = 3000;

//Setup pug
app.set('view engine', 'pug');

//Firebase Config
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.PROJECT_NAME + ".firebaseapp.com",
  projectId: process.env.PROJECT_ID,
};

//start firestore implementation and get the database
initializeApp(firebaseConfig);
const db = getFirestore();

//Setup collection and document
const collectionName = "cities";
const docName = "LA"
const docRef = doc(db, collectionName, docName);
const docSnap = await getDoc(docRef);



app.get("/", (req, res) => {
  res.send("Hello there main page!")
});

app.post("/create", async (req, res) => {

  //create document if document doesn't exist already
  if (!docSnap.exists()) {
    await setDoc(doc(db, collectionName, docName), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  } else {
    // doc.data() will be undefined in this case
    console.log("Document exists already!");
  }
  res.status("200").send(`Created a new collection with name:${collectionName}`);
});

app.get("/read", (req, res) => {

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  res.status("200").send(`Read collection with name:${collectionName}`);
});

app.put("/update", async (req, res) => {
  await updateDoc(docRef, {
    capital: true
  })
  res.status("200").send(`Updated collection with name:${collectionName}`);
});

app.delete("/delete", async (req, res) => {
  await deleteDoc(docRef)
  res.status("200").send(`Deleted collection with name:${collectionName}`);
});

app.get("/pug", function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Start listening on port 3000.
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`));



import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

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

function indexRoute(app) {
    app.get("/", (req, res) => {
        res.send("Hello there main page!")
    });

}

function createRoute(app) {
    app.post("/create", async (req, res) => {

        //create document if document doesn't exist already
        if (!docSnap.exists()) {
            await setDoc(doc(db, collectionName, docName), {
                name: "Los Angeles",
                state: "CA",
                country: "USA"
            });
        } else {
            console.log("Document exists already!");
        }
        res.status("200").send(`Created a new collection with name:${collectionName}`);
    });
}

function readRoute(params) {
    app.get("/read", (req, res) => {

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
        res.status("200").send(`Read collection with name:${collectionName}`);
    });
}


function updateRoute(app) {
    app.put("/update", async (req, res) => {
        await updateDoc(docRef, {
            capital: true
        })
        res.status("200").send(`Updated collection with name:${collectionName}`);
    });
}


function deleteRoute(app) {
    app.delete("/delete", async (req, res) => {
        await deleteDoc(docRef)
        res.status("200").send(`Deleted collection with name:${collectionName}`);
    });
}


function pugRoute(params) {
    app.get("/pug", function (req, res) {
        res.render('index', { title: 'Hey', message: 'Hello there!' });
    });
}

export { indexRoute as index }
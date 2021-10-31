//Setup Server
const express = require("express");
const app = express();
const port = 3000;

//Setup pug
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  res.send("Hello World.This is my first route in express!")
});

app.get("/pug", function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

// Start listening on port 3000.
app.listen(port, () => 
console.log(`Example app listening at http://localhost:${port}`));
//Setup express and firebase
import express  from "express";
import dotenv from "dotenv";
dotenv.config({path:'config/.env'});

const app = express();
const port = process.env.PORT || 3000;

//Setup pug
app.set('view engine', 'pug');

app.get("/", (req,res) => {
  res.send('Hello World');
});


// Start listening on port 3000.
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`));

export default app;
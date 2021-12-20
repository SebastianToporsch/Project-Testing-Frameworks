//Setup express and firebase
import express  from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import { userRoute } from './routes/routes';
import bodyParser from "body-parser";
dotenv.config({path:'config/.env'});


const app = express();
const port = process.env.PORT || 3000;

//Setup pug
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use("",userRoute);


// Start listening on port 3000.
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}/users `));
  console.log("Database connection established!");


// create connection to the database
export const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  multipleStatements: true
});

export default app;
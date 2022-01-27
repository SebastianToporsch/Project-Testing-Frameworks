//Setup express and firebase
import express  from "express";
import mysql from "mysql2";
import { userRoute } from './routes/routes';
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({path:'config/.env'});

const app = express();
app.use(express.json());

const rest_port = process.env.REST_PORT || 3000;

app.use(bodyParser.json());
app.use("",userRoute);

// setup view engine
app.set('view engine', 'pug');

app.use('/', express.static('public'));


// Start listening
app.listen(rest_port);

console.log(`Example app listening at http://localhost:${rest_port}`);
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
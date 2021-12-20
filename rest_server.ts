//Setup express and firebase
import express  from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import { userRoute } from './routes/routes';
import bodyParser from "body-parser";



dotenv.config({path:'config/.env'});

const app = express();
const rest_port = process.env.REST_PORT || 3000;

app.use(bodyParser.json());
app.use("",userRoute);

// setup view engine
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  return res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Start listening
const api_server = app.listen(rest_port, () =>
  console.log(`Example app listening at http://localhost:${rest_port}`));
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
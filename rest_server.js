//Setup express and firebase
import express from "express";
import mysql from "mysql2";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({ path: 'config/.env' });
import { userRoute } from './routes/routes.js';


const app = express();
app.use(express.json());

const rest_port = process.env.REST_PORT || 3000;

//setting the cors options to allow all sources
var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials:true
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use("", userRoute);

// setup view engine
app.set('view engine', 'pug');

app.use('/', express.static('public'));


// Start listening
app.listen(rest_port);

// create connection to the database
export default app;
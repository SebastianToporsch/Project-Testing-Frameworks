// Setup express and firebase
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import makeApp from './rest_api.js'
import { DBConnection } from './db/db-connection.js'
dotenv.config({ path: 'config/.env' })

const app = makeApp(DBConnection)
app.use(express.json())

const restPort = process.env.REST_PORT || 3000

// setting the cors options to allow all sources
const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

// setup view engine
app.set('view engine', 'pug')

app.use('/', express.static('public'))

// Start listening
app.listen(restPort)

console.log(`Rest Server listening at http://localhost:${restPort}`)
console.log('Database connection established!')

// create connection to the database
export const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  multipleStatements: true
})

export default app

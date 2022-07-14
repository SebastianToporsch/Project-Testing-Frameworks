// Setup express and firebase
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config({ path: 'config/.env' })

const app = express()
app.use(express.json())

const serverPort = process.env.SERVER_PORT || 3000

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

// home screen
app.get('/', function (req, res) {
  return res.render('rest/rest_index', { message: 'Hello there!' })
})

app.get('/404', function (req, res) {
  return res.render('rest/404')
})

// Start listening
app.listen(serverPort)

console.log(`Server is listening at http://localhost:${serverPort}`)
export default app

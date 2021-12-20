import express from "express";
import dotenv from "dotenv";
dotenv.config({path:'config/.env'});
import ws from 'ws';

const ws_port = process.env.WS_PORT || 3001;

const app = express();

// let server listen to port configured in .env
const server = app.listen(ws_port, () => {
  console.log(`Server is up and running on http://localhost:${ws_port}`);
});

// actvate url encoding for the server
app.use(express.urlencoded({ extended: true }));
// setup session handling
app.use('/', express.static('build'));

//make a WebSocket Server for WebSocket messages
const wss = new ws.Server({ server });
wss.on('connection', (ws, req) => {
});

// setup view engine as "pug"
app.set('view engine', 'pug');

// set directory for views
app.set('views', './views');

app.get('/', async (req, res) => {
  return res.render('index');
});

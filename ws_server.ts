import ws from "ws";
import express from "express";
import dotenv from "dotenv";
dotenv.config({path:'config/.env'});

const app = express();

const ws_port = process.env.WS_PORT;

// setup view engine
app.set('view engine', 'pug');

app.use('/', express.static('build'));

app.get('/', function (req, res) {
  return res.render('index', { title: 'Hey', message: 'Hello there!' });
});

const server = app.listen(ws_port, ()=>
  console.log(`Example app listening at http://localhost:${ws_port}`));

const wsServer = new ws.Server({server});
wsServer.on('connection', (ws,req) => {
  console.log("test");

  ws.on("message",(data)=>
  console.log(data));
});
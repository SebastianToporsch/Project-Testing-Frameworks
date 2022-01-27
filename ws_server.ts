import ws from "ws";
import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: 'config/.env' });

const app = express();

const ws_port = process.env.WS_PORT;

// setup view engine
app.set('view engine', 'pug');

app.use('/', express.static('build'));

app.get('/', function (req, res) {
  return res.render('ws_index', { title: 'Hey', message: 'Hello there WebSocket!' });
});

const server = app.listen(ws_port, () =>
  console.log(`Example app listening at http://localhost:${ws_port}`));

const wsServer = new ws.Server({ server });
wsServer.on('connection', (ws) => {

  ws.on("message", (data: any) => {
    ws.send(data);
  });

  ws.on("ping",(data: any)=> {
    ws.ping(data);
    
  });
  ws.on("pong",(data: any)=> {
    ws.pong("pong");
  });

  ws.on("upgrade",()=> {
    console.log("upgrade");
  });

  ws.on("error",(data)=> {
    ws.send(data);
  });

  ws.on("unexpected-response",()=>{
    console.log("unexpected-response");
  });

  ws.on("close", () => {
    clearInterval(ws.timer);
  });

});
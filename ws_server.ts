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
  return res.render('ws/ws_index', {message: 'Hello there WebSocket!' });
});

app.get('/ws', function (req, res) {
  return res.render('ws/test', {message: 'Hello there WebSocket!' });
});


const server = app.listen(ws_port, () =>
  console.log(`Example app listening at http://localhost:${ws_port}`));

const wss = new ws.Server({ server });
wss.on('connection', (ws) => {
  ws.isAlive = true;

  ws.on("message", (data: any) => {
    ws.send(data);
  });


  ws.on("ping",(data: any)=> {
    ws.send(data.toString());
  });
  ws.on("pong",(data: any)=> {
    ws.send(data.toString());
  });

  ws.on("upgrade",()=> {
    console.log("upgrade server");
  });

  ws.on("error",(data)=> {
      console.log("error");
      ws.send(data);
      clearInterval(ws.timer);
  });

  ws.on("unexpected-response",()=>{
    console.log("unexpected-response");
  });

  ws.on("close", () => {
    clearInterval(ws.timer);
  });

});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on("close",()=> {
  clearInterval(interval);
});
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
  return res.render('ws/ws_index', { message: 'Hello there WebSocket!' });
});

app.get('/ws', function (req, res) {
  return res.render('ws/test', { message: 'Hello there WebSocket!' });
});


const server = app.listen(ws_port, () =>
  console.log(`WS Server is listening at http://localhost:${ws_port}`));

const wss = new ws.Server({ server });
// tslint:disable-next-line: no-shadowed-variable
wss.on('connection', (ws) => {
  ws.isAlive = true;

  ws.on("message", (data) => {
    ws.send(data);
  });


  ws.on("ping", (data) => {
    ws.send(data.toString());
  });
  ws.on("pong", (data) => {
    ws.send(data.toString());
  });

  ws.on("upgrade", () => {
    console.log("upgrade server");
  });

  ws.on("error", (data) => {
    console.log("error");
    ws.send(data);
    clearInterval(ws.timer);
  });

  ws.on("unexpected-response", () => {
    console.log("unexpected-response");
  });

  ws.on("close", () => {
    clearInterval(ws.timer);
  });
});

const interval = setInterval(function ping() {
  // tslint:disable-next-line: no-shadowed-variable
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on("close", () => {
  clearInterval(interval);
});
const request = require('superagent');
const WebSocket = require('ws');
require('dotenv').config({ path: 'config/.env' });
const ws_port = process.env.WS_PORT || 3000;
const baseURL = `ws://localhost:${ws_port}`

describe('Test if client can connect to websocket', () => {
  it('Should trigger WebSocketServer onconnect', (done) => {
    const ws = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
      ws.close();
    }).on('close',()=> done());
  });
});


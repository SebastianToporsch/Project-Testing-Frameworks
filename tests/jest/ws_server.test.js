require('superagent');
const WebSocket = require('ws');
require('dotenv').config({ path: 'config/.env' });
const ws_port = process.env.WS_PORT || 3000;
const baseURL = `ws://localhost:${ws_port}`

describe('Test if client can connect to websocket', () => {
  it('Should trigger WebSocketServer on connect', (done) => {
    const ws = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
      ws.close();
    }).on('close',()=> done());
  });

  it('Should trigger WebSocketServer on close', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  it('Should trigger WebSocketServer on message', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  it('Should trigger WebSocketServer on upgrade', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });


  it('Should trigger WebSocketServer on ping', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  it('Should trigger WebSocketServer on pong', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  it('Should trigger WebSocketServer on error', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  it('Should trigger WebSocketServer on unexpected-response', (done) => {
    const ws = new WebSocket(baseURL);
    var message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");

      ws.on("message",(data)=> {
        message = data;
      })

      ws.close();
    }).on('close',()=> {
      expect(message).toBe("test")
      done()
    } );
  });

  

  

});


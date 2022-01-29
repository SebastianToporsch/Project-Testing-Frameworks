require('superagent');
require('dotenv').config({ path: 'config/.env' });
var chai = require('chai');
var expect = chai.expect;
const WebSocket = require('ws');
const ws_port = process.env.WS_PORT || 3000;
const baseURL = `ws://localhost:${ws_port}`

function heartbeat() {
  clearTimeout(this.pingTimeout);

  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 100000 + 1000);
}

describe('Test if client can connect to websocket', () => {
  it('Should trigger WebSocketServer on connect', async() => {
    const ws = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).to.equal(1);
      ws.close();
    });
  });

  it('Should trigger WebSocketServer and check up on readystate during test', async () => {
    const ws = new WebSocket(baseURL);
    expect(ws.readyState).to.equal(0);
    ws.on("open", () => {
      expect(ws.readyState).to.equal(1);
      ws.close();
      expect(ws.readyState).to.equal(2);
    });
  });


  it('Should trigger WebSocketServer on connect with multiple connections', async () => {
    const ws = new WebSocket(baseURL); 
    const ws2 = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).to.equal(1);
      ws.close();
    });
    
    ws2.on("open", () => {
      expect(ws2.readyState).to.equal(1);
      ws2.close();
    });
  });

  

  it('Should trigger WebSocketServer on message', async() => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      expect(ws.readyState).to.equal(1);

      ws.send("test");
      ws.on("message", (data) => {
        message = data;
      })

      ws.close();
    }).on('close', () => {
      expect(message).to.equal("test")
    });
  });

  it('Should trigger WebSocketServer on message with multiple connections', async () => {
    var message;
    var message2;
    const ws = new WebSocket(baseURL); 
    const ws2 = new WebSocket(baseURL);
    
    ws.on("open", () => {
      expect(ws.readyState).to.equal(1);

      ws.send("test");
      ws.on("message", (data) => {
        message = data;
      })
      ws.close(); 
    })

    ws.on("close", () => {
      expect(message).to.equal("test");
      
    })

    ws2.on("open", () => {
      expect(ws2.readyState).to.equal(1);
      ws2.send("test2");
      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on("close", () => {
      expect(message2).to.equal("test2");
      
    })
  });

  it('Should trigger WebSocketServer on ping', async() => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      ws.ping("test");
      ws.on("ping", heartbeat);

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).to.equal("test");
      clearTimeout(this.pingTimeout);
    });
  });

  it('Should trigger WebSocketServer on ping with multiple connections', async() => {
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);
    let message;
    let message2;

    ws.on("open", () => {
      ws.ping("test");
      ws.on("ping", heartbeat);

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).to.equal("test");
      clearTimeout(this.pingTimeout);
    });


    ws2.on("open", () => {
      ws2.ping("test2");
      ws2.on("ping", heartbeat);

      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on('close', () => {
      expect(message2).to.equal("test2");
      clearTimeout(this.pingTimeout);
    });

  });


  it('Should trigger WebSocketServer on pong', async () => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      ws.pong("test");
      ws.on("pong", heartbeat);

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).to.equal("test");
      clearTimeout(this.pingTimeout);
    });
  });

  it('Should trigger WebSocketServer on pong', async () => {
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);
    let message;
    let message2;

    ws.on("open", () => {
      ws.pong("test");
      ws.on("pong", heartbeat);

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).to.equal("test");
      clearTimeout(this.pingTimeout);
    });



    ws2.on("open", () => {
      ws2.pong("test2");
      ws2.on("pong", heartbeat);

      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on('close', () => {
      expect(message2).to.equal("test2");
      clearTimeout(this.pingTimeout);
    });

  });
});
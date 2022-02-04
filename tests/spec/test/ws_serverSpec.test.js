require('superagent');
const WebSocket = require('ws');
require('dotenv').config({ path: 'config/.env' });
const ws_port = process.env.WS_PORT || 8081;
const baseURL = `ws://localhost:${ws_port}`


describe('Test if client can connect to websocket', () => {
  it('Should trigger WebSocketServer on connect', async () => {
    const ws = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
      ws.close();
    });
  });

  it('Should trigger WebSocketServer and check up on readystate during test', async () => {
    const ws = new WebSocket(baseURL);
    expect(ws.readyState).toBe(0);
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
      ws.close();
      expect(ws.readyState).toBe(2);
    });
  });


  it('Should trigger WebSocketServer on connect with multiple connections', async () => {
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);
    ws.on("open", () => {
      expect(ws.readyState).toBe(1);
      ws.close();
    });

    ws2.on("open", () => {
      expect(ws2.readyState).toBe(1);
      ws2.close();
    });
  });



  it('Should trigger WebSocketServer on message', async () => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");
      ws.on("message", (data) => {
        message = data;
      })

      ws.close();
    }).on('close', () => {
      expect(message).toBe("test")
    });
  });

  it('Should trigger WebSocketServer on message with multiple connections', async () => {
    var message;
    var message2;
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);

    ws.on("open", () => {
      expect(ws.readyState).toBe(1);

      ws.send("test");
      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    })

    ws.on("close", () => {
      expect(message).toBe("test");

    })

    ws2.on("open", () => {
      expect(ws2.readyState).toBe(1);
      ws2.send("test2");
      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on("close", () => {
      expect(message2).toBe("test2");

    })
  });

  it('Should trigger WebSocketServer on ping', async () => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      ws.ping("test");

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).toBe("test");
    });
  });

  it('Should trigger WebSocketServer on ping with multiple connections', async () => {
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);
    let message;
    let message2;

    ws.on("open", () => {
      ws.ping("test");

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).toBe("test");
    });


    ws2.on("open", () => {
      ws2.ping("test2");

      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on('close', () => {
      expect(message2).toBe("test2");
    });

  });


  it('Should trigger WebSocketServer on pong', async () => {
    const ws = new WebSocket(baseURL);
    let message;

    ws.on("open", () => {
      ws.pong("test");

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).toBe("test");
    });
  });

  it('Should trigger WebSocketServer on pong', async () => {
    const ws = new WebSocket(baseURL);
    const ws2 = new WebSocket(baseURL);
    let message;
    let message2;

    ws.on("open", () => {
      ws.pong("test");

      ws.on("message", (data) => {
        message = data;
      })
      ws.close();
    });

    ws.on('close', () => {
      expect(message).toBe("test");
    });



    ws2.on("open", () => {
      ws2.pong("test2");

      ws2.on("message", (data) => {
        message2 = data;
      })
      ws2.close();
    });

    ws2.on('close', () => {
      expect(message2).toBe("test2");
    });

  });
});
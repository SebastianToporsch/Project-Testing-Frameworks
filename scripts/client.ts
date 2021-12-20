import ws from "ws";


  //initial function that sets the inital values of the websocket functions
  function init() {
    if (ws) {
      ws.onerror = ws.onopen = ws.onclose = null;
    }
  }

  //WebSocket at ws://localhost:8081
  var ws = new WebSocket(`ws://${window.location.host}`);


  //Message that the connection is open now
  ws.onopen = () => {
    console.log("connection established");
    
  };

  //sends the data to showMessage so that the data can be displayed
  ws.onmessage = () => {
    console.log("test");
    
  };

  ws.onclose = function () {
    ws = null;
  };


  //setup the function
  init();
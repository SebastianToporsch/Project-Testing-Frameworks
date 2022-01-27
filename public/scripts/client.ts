import ws from 'ws';
window.WebSocket = window.WebSocket;

(function () {

function init() {
  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close;
  }
}

let ws;
  //WebSocket at ws://localhost:8081
  ws = new WebSocket(
    `ws://${window.location.host}`,
    'dubble'
  );


//Message that the connection is open now
ws.onopen = function () {
  console.log("Connection open");
};

//Message that the connection is open now
ws.onopen = function () {
  console.log("Connection open");
};

init();
})();
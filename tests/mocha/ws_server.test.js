const request = require('superagent');
const WebSocket = require('ws');
require('dotenv').config({ path: 'config/.env' });
const ws_port = process.env.WS_PORT || 3000;
const baseURL = `http://localhost:${ws_port}`
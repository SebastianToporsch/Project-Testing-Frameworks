const request = require('superagent');
require('dotenv').config({ path: 'config/.env' });
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`

describe('Name of the group', () => {
  it('should behave...', () => {
  });
});
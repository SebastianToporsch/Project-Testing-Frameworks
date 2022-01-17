var request = require("request");
require('dotenv').config({ path: 'config/.env' })

const rest_port = process.env.REST_PORT || 8080;
const baseURL = `http://localhost:${rest_port}`


describe('Test if server is available', () => {
  it('Should return 200 if server available', () => {
    request.get(baseURL).on("response", (response) => {
      expect(response.statusCode).toBe(404);
    })
  });
});


describe('test', () => {
  it('test2', () => {
    expect("test").toBe("test2");
  });
});
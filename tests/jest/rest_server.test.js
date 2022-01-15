//import app from "../../build/rest_server";
import request from "request";
import dotenv from "dotenv";
dotenv.config({path:'config/.env'});
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`


let User = {
  _id: 1,
  name: '',
  email: '',
  password: ''
};

describe('Test if server is available', () => {
  test('Should return 200 if server available',  () => {
    request.get(baseURL).on("response", (response) => {
      expect(response.statusCode).toBe(200);
    })
  });
});
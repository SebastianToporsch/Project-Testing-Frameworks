var request = require("request");
var chai = require('chai');
var expect = chai.expect;
require('dotenv').config({path:'config/.env'})

const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`

let User = {
  _id:1,
  name:'',
  email:'',
  password:''
};


describe('Test if server is available', () => {
  it('Should return 200 if server available', () => {
    request.get(baseURL, function (error, repsonse, body) {
      expect(repsonse.statusCode).to.equal(200);
      })
  });
});
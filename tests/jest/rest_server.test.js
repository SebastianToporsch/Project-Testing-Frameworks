var request = require("request");
require('dotenv').config({path:'config/.env'});
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`


let User = {
  _id: 1,
  name: '',
  email: '',
  password: ''
};

describe('Test if server is available', () => {
  test('Should return 200 if server available', () => {
    request.get(baseURL).on("response", (response) => {
      expect(response.statusCode).toBe(200);
    })
  });
});

describe('Test if rest routes return 200 on success', () => {
  test('Should return 200 if create rotue works', () => {
    
  });

  test('Should return 200 if read rotue works', () => {
    
  });

  test('Should return 200 if update rotue works', () => {
    
  });

  test('Should return 200 if delete rotue works', () => {
    
  });
});

describe('Test if rest routes fail if conditions are wrong', () => {
  test('Should return 200 if create rotue works', () => {
    
  });

  test('Should return 200 if read rotue works', () => {
    
  });

  test('Should return 200 if update rotue works', () => {
    
  });

  test('Should return an error if ', () => {
    
  });
});
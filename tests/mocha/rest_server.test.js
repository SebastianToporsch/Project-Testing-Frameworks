var request = require("superagent");
var chai = require('chai');
const { assert } = require("chai");
var expect = chai.expect;
require('dotenv').config({path:'config/.env'})

const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`


describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).to.equal(200);
      })
  });
});



describe('Test if server contains expected text', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).contains("Hello there")
      })
  });

  it('Should return 404 if no users are in the database', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).contains("Hello there")
      })
  });
});



describe('Test if rest routes return 200 on success', () => {

  it('Should return 200 if create route works', async () => {
      await request
        .post(baseURL + "/user")
        .send({ username: 'CREATE', age: 10, email:"test@test.com",password:"test" })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => {
          expect(res.statusCode).to.equal(200);
          expect(res.text).contains("CREATE");
        })
  });

  it('Should return 200 if read all route works', async() => {
    await request.get(baseURL +"/users")
    .then(res => {
      
      expect(res.statusCode).to.equal(200);
      expect(res.text).contains("CREATE");
      
    })
  });

  it('Should return 200 if read one route works', async() => {
    await request.get(baseURL +"/user/CREATE")
    .then(res => {
      expect(res.statusCode).to.equal(200);
      expect(res.text).contains("CREATE");
      
    })
  });

  it('Should return 200 if delete route works', async() => {
      await request.delete(baseURL + "/user")
        .send({ username: 'CREATE' })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => {
          expect(res.statusCode).to.equal(200);
        })
  });
});


describe('Test if rest routes catch error cases', () => {
  it('Should return 204 if create rotue works', async () => {
    await request
      .post(baseURL + "/user")
      .send({ username: 'CREATE', age: 0 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).to.equal(204);
        expect(res.text).not.contains("CREATE");
      })
  });

  it('Should return 404 page if read returns no user', async () => {
    await request.get(baseURL + "/users")
      .then(res => {

        expect(res.statusCode).to.equal(200);
        expect(res.text).contains("No user found");
      })
  });

  it('Should return  page if read one rotue returns no user', async () => {
    await request.get(baseURL + "/user/CREATE")
      .then(res => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).contains("No user found");
      })
  });

  /*test('Should return an error if ', async () => {
    await request.delete(baseURL + "/user")
      .send({ username: '' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(404);
      })
  });*/
});

after

after(async () => {
  await request.delete(baseURL + "/user")
      .send({ username: 'CREATE' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
  });
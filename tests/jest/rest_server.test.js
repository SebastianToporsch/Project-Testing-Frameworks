const request = require('superagent');
require('dotenv').config({ path: 'config/.env' });
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`


describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200);
      })
  });
});

describe('Test if server contains expected text', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Hello there")
      })
  });

  it('Should return 404 if no users are in the database', async () => {
    request.get(baseURL +"/users")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user")
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
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("CREATE");
      })
  });

  it('Should return 200 if read all route works', async () => {
    await request.get(baseURL + "/users")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Id / Username / Age / Email");
        expect(res.text).toContain("CREATE");
      })
  });

  it('Should return 200 if update route works', async () => {
    await request
      .put(baseURL + "/user/CREATE")
      .send({ username: 'CREATE2', age: 12 })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Name and Age update successful");
      })
  });

  it('Should return 200 if read one route works', async () => {
    await request.get(baseURL + "/user/CREATE2")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("The user is");
        expect(res.text).toContain("CREATE2");
      })
  });

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + "/user")
      .send({ username: 'CREATE2' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200);
      })
  });
});




describe('Test if rest routes catch error cases', () => {
  it('Should return 204 if create request has empty parameters', async () => {
    await request
      .post(baseURL + "/user")
      .send({ username: 'CREATE', age: 0 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204);
        expect(res.text).not.toContain("CREATE");
      })
  });

  it('Should return 404 page if read all route returns no user', async () => {
    await request.get(baseURL + "/users")
      .then(res => {

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user found");
      })
  });

  it('Should return 404 page if read one route returns no user', async () => {
    await request.get(baseURL + "/user/CREATE")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user found");
      })
  });

  it('Should return 204 if update request has empty parameters', async () => {
    await request
      .put(baseURL + "/user/CREATE2")
      .send({ username: '', age: 0 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(400);
        expect(res.text).not.toContain("CREATE");
      })
  });

  it('Should return 204 if delete request has empty parameters', async () => {
    await request.delete(baseURL + "/user")
      .send({ username: '' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  });
});



afterAll(async () => {
  await request.delete(baseURL + "/user")
      .send({ username: 'CREATE' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
  });
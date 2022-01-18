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

describe('Test if rest routes return 200 on success', () => {

  it('Should return 200 if create route works', async () => {
      await request
        .post(baseURL + "/user")
        .send({ username: 'CREATE', age: 10 })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.text).toContain("CREATE");
        })
  });

  it('Should return 200 if read all route works', async() => {
    await request.get(baseURL +"/users")
    .then(res => {
      
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("CREATE");
      
    })
  });

  it('Should return 200 if read one route works', async() => {
    await request.get(baseURL +"/user/CREATE")
    .then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("CREATE");
      
    })
  });

  it('Should return 200 if delete route works', async() => {
      await request.delete(baseURL + "/user")
        .send({ username: 'CREATE' })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => {
          expect(res.statusCode).toBe(200);
        })
  });
});

/*describe('Test if rest routes fail if conditions are wrong', () => {
  test('Should return 500 if create rotue works', () => {
    
  });

  test('Should return 500 if read rotue works', () => {

  });

  test('Should return 500 if update rotue works', () => {

  });

  test('Should return an error if ', () => {

  });
});*/
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`
jest.useFakeTimers()
import { jest } from '@jest/globals'
import app from "../../rest_server.js"
import request from "supertest";
import { DBConnection, connectionPool } from "../../db/db-connection.js";


const username = "test";
//require('dotenv').config({ path: 'config/.env' });


var id;

/* beforeAll(() => {
  return  DBConnection.deleteUserByUsername(username).then(() => {
      return DBConnection.addUser({
          username: username,
          age:20,
          email:"test@test.com",
          password: "test"
      });
  });
}); */

describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request(app).get(baseURL + '')

  })
})

/* describe('Test if server contains expected text', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("Hello there")
      })
  })

  it('Should return 404 page if no users are in the database', async () => {
    request.get(baseURL + "/user/0")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user")
      })
  })
})


describe('Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request
      .post(baseURL + "/user")
      .send({ username: 'CREATE', age: 20, email: "test@test.com", password: "test" })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("CREATE")
      })
  })

  it('Should return 200 if read all route works', async () => {
    await request.get(baseURL + "/user")
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("Id / Username")
        expect(res.text).toContain("CREATE")
        let match = new RegExp("<li>ID: ([0-9].*).\/.*CREATE<").exec(res.text)
        id = match[1]
      })
  })

  it('Should return 200 if read one route works', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("The user is")
        expect(res.text).toContain("CREATE")
      })
  })

  it('Should return 200 if update information route works', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send({ username: 'CREATE2', age: 12 })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Name and Age update successful")
      })
  })

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + `/user/${id}`)
      .send({ username: 'CREATE2' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
  })
})

describe('Test if rest routes return 204 on empty content ', () => {
  it('Should return 204 if create route has empty body', async () => {
    await request
      .post(baseURL + "/user")
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  })

  it('Should return 204 if update information route has empty body', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send()
      .then(res => {
        expect(res.statusCode).toBe(204)
      })
  })

  it('Should return 204 if delete has empty body', async () => {
    await request.delete(baseURL + `/user/${id}`)
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204)
      })
  })
})

describe('Test if rest routes catch error cases', () => {
  it('Should return 400 if create request has empty parameters', async () => {
    await request
      .post(baseURL + "/user")
      .send({ username: 'CREATE', age: 0 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("Empty username or age")
      })
  })

  it('Should return 404 page if read all route returns no user', async () => {
    await request.get(baseURL + "/user")
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("No user found")
      })
  })

  it('Should return 404 page if read one route returns no user', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("No user found")
      })
  })

  it('Should return 400 if update information request has empty parameters', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send({ username: '', age: 0 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("Empty username or age")
      })
  })
})
 */
afterAll( (done) => {
  done()
})
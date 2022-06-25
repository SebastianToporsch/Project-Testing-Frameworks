import request from "superagent";
import { expect } from '@jest/globals'
import dotenv from "dotenv";
dotenv.config({ path: 'config/.env' });
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`


var id;

describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("Hello there")
      })
  })
})


it('Should return 404 page if no users are in the database', async () => {
  request.get(baseURL + "/user/0")
    .then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("No user")
    })
})


describe('Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request
      .post(baseURL + "/user")
      .send({
        username: 'CREATE',
        age: 20,
        email: "test@test.com",
        password: "test"
      })
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
      .send({
        username: 'CREATE2',
        age: 12,
        email: "test2@test.com",
        password: "test2"
      })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body.data.username).toContain("CREATE2");
        expect(res.body.data.age).toBe(12)
      })
  })

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + `/user/${id}`)
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

})

describe('Test if rest routes catch error cases', () => {
  it('Should return 400 if create request has empty parameters', async () => {
    await request
      .post(baseURL + "/user")
      .send({
        username: 'CREATE',
        age: 0
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("One or multiple fields are empty!")
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
    await request.get(baseURL + `/user/0`)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toContain("No user found")
      })
  })

  it('Should return 400 if update information request has empty parameters', async () => {
    await request
      .put(baseURL + `/user/0`)
      .send({
        username: '',
        age: 0, email: '',
        password: ''
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("One or multiple fields are empty!")
      })
  })
})
afterAll(async () => {
  await request.delete(baseURL + `/user/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')

  await request.delete(baseURL + `/user/${id}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
})
/* eslint-disable no-undef */
import dotenv from 'dotenv'
import request from 'superagent'
dotenv.config({ path: './config/.env' })
const restPort = process.env.REST_PORT || 8083
const baseURL = `http://localhost:${restPort}`

let id

describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL + '/health')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('Hello there')
      })
  })
})

describe('Test if database is empty', () => {
  it('Should return 404 if no users are in the database', async () => {
    request.get(baseURL + '/user/0')
      .then(res => {
      }).catch(e => {
        expect(e.status).toBe(404)
        expect(e.response.body.message).toBe('No user found')
      })
  })
})

describe('Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request
      .post(baseURL + '/user')
      .send({
        username: 'CREATE',
        age: 20,
        email: 'test@test.com',
        password: 'test'
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.data.username).toContain('CREATE')
        expect(res.body.data.age).toBe(20)
        expect(res.body.data.email).toBe('test@test.com')
        expect(res.body.data.password).toBe('test')
      })
  })

  it('Should return 200 if read all route works', async () => {
    await request.get(baseURL + '/user')
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.data[0].username).toBe('CREATE')
        expect(res.body.data[0].age).toBe(20)
        expect(res.body.data[0].email).toBe('test@test.com')
        id = res.body.data[0].id
      })
  })

  it('Should return 200 if read one route works', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.data[0].id).toBe(id)
        expect(res.body.data[0].username).toBe('CREATE')
        expect(res.body.data[0].age).toBe(20)
        expect(res.body.data[0].email).toBe('test@test.com')
      })
  })

  it('Should return 200 if update information route works', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send({
        username: 'CREATE2',
        age: 12,
        email: 'test2@test.com',
        password: 'test2'
      })
      .then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body.data.username).toBe('CREATE2')
        expect(res.body.data.age).toBe(12)
        expect(res.body.data.email).toBe('test2@test.com')
        expect(res.body.data.password).toBe('test2')
      })
  })

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200)
      })
  })
})

describe('Test if rest routes return 204 on empty content', () => {
  it('Should return 204 if create route has empty body', async () => {
    await request
      .post(baseURL + '/user')
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204)
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
      .post(baseURL + '/user')
      .send({
        username: 'CREATE',
        age: 0
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain('CREATE')
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain('One or multiple fields are empty!')
      })
  })

  it('Should return 400 if update information request has empty parameters', async () => {
    await request
      .put(baseURL + '/user/0')
      .send({
        username: '',
        age: 0,
        email: '',
        password: ''
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain('CREATE')
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain('One or multiple fields are empty!')
      })
  })

  it('Should return 404 if read all route returns no user', async () => {
    await request.get(baseURL + '/user')
      .then().catch(e => {
        expect(e.status).toBe(404)
        expect(e.response.body.message).toBe('No user found')
      })
  })

  it('Should return 404 if read one route returns no user', async () => {
    await request.get(baseURL + '/user/0')
      .then().catch(e => {
        expect(e.status).toBe(404)
        expect(e.response.body.message).toBe('No user found')
      })
  })
})
afterAll(async () => {
  // await request.delete(baseURL + `/user/${id}`)
})

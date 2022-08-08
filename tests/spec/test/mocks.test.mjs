/* eslint-disable no-undef */
import sinon from 'sinon'
import makeApp from '../../../rest_api.js'
import request from 'supertest'
import flush from 'flush-cache'

const addUser = sinon.mock()
const getUser = sinon.mock()
const getUsers = sinon.mock()
const changeUser = sinon.mock()
const deleteUser = sinon.mock()

const app = makeApp({
  addUser,
  getUser,
  getUsers,
  changeUser,
  deleteUser
})

const id = 1

const user = { username: 'CREATE', age: 20, email: 'test@test.com', password: 'test' }

// flush cache
beforeEach(function () {
  flush()
})

beforeEach(function () { flush() })

describe('MOCK: Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request(app).post('/user').send(user).then(res => {
      expect(res.statusCode).toBe(200)
      expect(addUser.lastCall.args[0].username).toBe(user.username)
      expect(addUser.lastCall.args[0].age).toBe(user.age)
      expect(addUser.lastCall.args[0].email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if read all route works', async () => {
    getUsers.reset()
    getUsers.returns(user)
    await request(app).get('/user').then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.data.username).toBe(user.username)
      expect(res.body.data.age).toBe(user.age)
      expect(res.body.data.email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if read one works', async () => {
    getUser.reset()
    getUser.returns(user)
    await request(app).get(`/user/${id}`).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.data.username).toBe(user.username)
      expect(res.body.data.age).toBe(user.age)
      expect(res.body.data.email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if update information route works', async () => {
    await request(app).put(`/user/${id}`).send(user).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.data.username).toBe(user.username)
      expect(res.body.data.age).toBe(user.age)
      expect(res.body.data.email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if delete route works', async () => {
    await request(app).delete(`/user/${id}`).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('User deleted')
    })
  })
})

describe('Test if rest routes return 204 on empty content', () => {
  it('Should return 204 if create route has empty body', async () => {
    await request(app).post('/user').send().then(res => {
      expect(res.statusCode).toBe(204)
    })
  })

  it('Should return 204 if update information route has empty body', async () => {
    await request(app).put(`/user/${id}`).send().then(res => {
      expect(res.statusCode).toBe(204)
    })
  })
})

describe('MOCK: Test if rest routes catch error cases', () => {
  it('MOCK:Should return 400 if create request has empty parameters', async () => {
    await request(app).post('/user').send({
      username: user.username,
      age: user.age
    }).then(res => {
      expect(res.statusCode).toBe(400)
      expect(res.body.message).toBe('One or multiple fields are empty!')
    })
  })

  it('MOCK: Should return 400 if update information request has empty parameters', async () => {
    await request(app).put(`/user/${id}`).send({
      username: user.username,
      age: user.age
    }).then(res => {
      expect(res.statusCode).toBe(400)
      expect(res.body.message).toBe('One or multiple fields are empty!')
    })
  })

  it('MOCK: Should return 404 if read all route returns no user', async () => {
    getUsers.reset()
    await request(app).get('/user').then(res => {
      expect(res.statusCode).toBe(404)
    })
  })

  it('MOCK: Should return 404 if read one route returns no user', async () => {
    getUser.reset()
    await request(app).get(`/user/${id}`).then(res => {
      expect(res.statusCode).toBe(404)
      expect(res.body.message).toBe('No user found')
    })
  })
})

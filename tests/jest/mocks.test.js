/* eslint-disable no-undef */
import request from 'supertest'
import makeApp from '../../rest_api.js'
import { jest, expect } from '@jest/globals'
import flush from 'flush-cache'

const addUser = jest.fn()
const getUser = jest.fn()
const getUsers = jest.fn()
const changeUser = jest.fn()
const deleteUser = jest.fn()

const user = { username: 'CREATE', age: 20, email: 'test@test.com', password: 'test' }
const resp = { data: user }

const app = makeApp({
  addUser,
  getUser,
  getUsers,
  changeUser,
  deleteUser
})

const id = 1
beforeEach(function () { flush() })

beforeAll(() => {
  jest.resetAllMocks()
})

describe('MOCK: Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    addUser.mockReset()
    await request(app).post('/user').send(user).then(res => {
      expect(res.statusCode).toBe(200)
      expect(addUser.mock.calls.length).toBe(1)
      expect(addUser.mock.calls[0][0].username).toBe(user.username)
      expect(addUser.mock.calls[0][0].age).toBe(user.age)
      expect(addUser.mock.calls[0][0].email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if read all route works', async () => {
    getUsers.mockReset()
    getUsers.mockReturnValue(resp)
    await request(app).get('/user').then(res => {
      expect(res.statusCode).toBe(200)
      expect(getUsers.mock.calls.length).toBe(1)
      expect(getUsers().data.username).toBe(user.username)
      expect(getUsers().data.age).toBe(20)
      expect(getUsers().data.email).toBe('test@test.com')
    })
  })

  it('MOCK: Should return 200 if read one works', async () => {
    getUser.mockReset()
    getUser.mockReturnValue(resp)
    await request(app).get(`/user/${id}`).then(res => {
      expect(res.statusCode).toBe(200)
      expect(getUser.mock.calls.length).toBe(1)
      expect(getUser().data.username).toBe(user.username)
      expect(getUser().data.age).toBe(20)
      expect(getUser().data.email).toBe('test@test.com')
    })
  })

  it('MOCK: Should return 200 if update information route works', async () => {
    changeUser.mockReset()
    await request(app).put(`/user/${id}`).send(user).then(res => {
      expect(changeUser.mock.calls.length).toBe(1)
      expect(res.statusCode).toBe(200)
      expect(changeUser.mock.calls[0][1].username).toBe(user.username)
      expect(changeUser.mock.calls[0][1].age).toBe(user.age)
      expect(changeUser.mock.calls[0][1].email).toBe(user.email)
    })
  })

  it('MOCK: Should return 200 if delete route works', async () => {
    deleteUser.mockReset()
    await request(app).delete(`/user/${id}`).send().then(res => {
      expect(deleteUser.mock.calls.length).toBe(1)
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('User deleted')
    })
  })
})

describe('MOCK: Test if rest routes return 204 on empty content', () => {
  it('MOCK: Should return 204 if create route has empty body', async () => {
    addUser.mockReset()
    await request(app).post('/user').send().then(res => {
      expect(res.statusCode).toBe(204)
    })
  })

  it('MOCK: Should return 204 if update information route has empty body', async () => {
    changeUser.mockReset()
    await request(app).put(`/user/${id}`).send().then(res => {
      expect(res.statusCode).toBe(204)
    })
  })
})

describe('MOCK: Test if rest routes catch error cases', () => {
  it('MOCK:Should return 400 if create request has empty parameters', async () => {
    addUser.mockReset()
    await request(app).post('/user').send({
      username: user.username,
      age: user.age
    }).then(res => {
      expect(res.statusCode).toBe(400)
      expect(res.body.message).toBe('One or multiple fields are empty!')
    })
  })

  it('MOCK: Should return 400 if update information request has empty parameters', async () => {
    changeUser.mockReset()
    await request(app).put(`/user/${id}`).send({
      username: user.username,
      age: user.age
    }).then(res => {
      expect(res.statusCode).toBe(400)
      expect(res.body.message).toBe('One or multiple fields are empty!')
    })
  })

  it('MOCK: Should return 404 if read all route returns no user', async () => {
    getUsers.mockReset()
    await request(app).get('/user').then(res => {
      expect(res.statusCode).toBe(404)
      expect(res.body.message).toBe('No user found')
    })
  })

  it('MOCK: Should return 404 if read one route returns no user', async () => {
    getUser.mockReset()
    await request(app).get(`/user/${id}`).then(res => {
      expect(res.statusCode).toBe(404)
      expect(res.body.message).toBe('No user found')
    })
  })
})

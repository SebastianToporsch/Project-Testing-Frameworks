import sinon from 'sinon';
import { expect } from "chai";
import makeApp from "../../rest_api.js";
import request from "supertest"

const addUser = sinon.mock()
const getUser = sinon.mock()
const getUsers = sinon.mock()
const changeUser = sinon.mock()
const deleteUser = sinon.mock()

const app = makeApp({
  addUser ,
  getUser,
  getUsers,
  changeUser,
  deleteUser
})

const id = 1

const user = { "username": "CREATE", "age": 20, "email": "test@test.com", "password": "test" }

describe('MOCK: Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request(app).post(`/user`).send(user).then(res => {
      expect(res.statusCode).to.equal(200)
      expect(addUser.lastCall.args[0].username).to.equal(user.username)
      expect(addUser.lastCall.args[0].age).to.equal(user.age)
      expect(addUser.lastCall.args[0].email).to.equal(user.email)
    })
  });

  it('MOCK: Should return 200 if read all route works', async () => {   
    await request(app).put(`/user`).send(user).then(res => {
      expect(res.statusCode).to.equal(200)
      expect(addUser.lastCall.args[0].username).to.equal(user.username)
      expect(addUser.lastCall.args[0].age).to.equal(user.age)
      expect(addUser.lastCall.args[0].email).to.equal(user.email)
    })
  });

  it('MOCK: Should return 200 if read one works', async () => {
    await request(app).get(`/user`).then(res => {
      expect(res.statusCode).to.equal(200)
      expect(addUser.lastCall.args[0].username).to.equal(user.username)
      expect(addUser.lastCall.args[0].age).to.equal(user.age)
      expect(addUser.lastCall.args[0].email).to.equal(user.email)
    })
  });

  it('MOCK: Should return 200 if update information route works', async () => { 
    await request(app).delete(`/user/${id}`).then(res => {
      expect(res.statusCode).to.equal(200)
      expect(res.body.message).to.equal("User deleted");
    })
  });
});
import sinon from 'sinon';
import { expect } from "chai";
import makeApp from "../../rest_api.js";
import request from "supertest"
import {DBConnection} from '../../db/db-connection.js';

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
const user = { "username": "CREATE", "age": 20, "email": "test@test.com", "password": "test" }

describe('Name of the group', () => {
  it('should behave...', async () => {
    await request(app).post(`/user`).send(user).then(res => {
      expect(res.statusCode).to.equal(200)
      expect(addUser.lastCall.args[0].username).to.equal(user.username)
      expect(addUser.lastCall.args[0].age).to.equal(user.age)
      expect(addUser.lastCall.args[0].email).to.equal(user.email)   
    })
  });
});
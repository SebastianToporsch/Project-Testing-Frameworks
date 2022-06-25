import request from "supertest"
import makeApp from "../../rest_server";
import { jest, expect } from '@jest/globals'

const addUser = jest.fn()
const getUser = jest.fn()
const getUsers = jest.fn()
const changeUser = jest.fn()
const deleteUser = jest.fn()

const app = makeApp({
  addUser,
  getUser,
  getUsers,
  changeUser,
  deleteUser
})

/*beforeAll(() => {
  addUser.mockReset()
  getUser.mockReset()
  getUsers.mockReset()
  changeUser.mockReset()
  deleteUser.mockReset()
})*/

describe('Name of the group', () => {
  test('Should return 404 page if no users are in the database', async () => {
    addUser.mockReset()
    await request(app).post("/user").send({
        username: 'CREATE', 
        age: 20, 
        email: "test@test.com", 
        password: "test"
      }).then( res => {
        console.log(res);
        expect(addUser.mock.calls.length).toBe(1) 
      }
        )
  })
});

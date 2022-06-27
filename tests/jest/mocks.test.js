import request from "supertest"
import makeApp from "../../rest_api.js";
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

beforeAll(() => {
  addUser.mockReset()
  getUser.mockReset()
  getUsers.mockReset()
  changeUser.mockReset()
  deleteUser.mockReset()
})
let id = 1;

/* describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request(app).get("/")
    .then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("No user")
    })
  })
}) */


/* it('Should return 404 page if no users are in the database', async () => {
  request(app).get("/user/0")
    .then(res => {
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("No user")
    })
}) */

describe('Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    addUser.mockReset()
    await request(app).post(`/user`).send({
      username: 'CREATE',
      age: 20,
      email: "test@test.com",
      password: "test"
    }).then(res => {
      expect(res.statusCode).toBe(200)
      expect(addUser.mock.calls.length).toBe(1)
      expect(addUser.mock.calls[0][0].username).toBe("CREATE")
      expect(addUser.mock.calls[0][0].age).toBe(20);
      expect(addUser.mock.calls[0][0].email).toBe("test@test.com")
      expect(addUser.mock.calls[0][0].password).toBe("test")
    }
    )
  })

  /*it('Should return 200 if read all route works', async () => {
    getUsers.mockReset()
    await request(app).get(`/user`).send().then(res => {
      console.log(res);
      expect(res.statusCode).toBe(200)
      //expect(getUsers.mock.calls.length).toBe(1)
      //expect(getUsers.mock.calls[0][0]).toContain("Id / Username");
      expect(getUsers.mock.calls[0][0].age).toBe(20);
      expect(getUsers.mock.calls[0][0].email).toBe("test@test.com");
      expect(getUsers.mock.calls[0][0].password).toBe("test"); 
    }
    )
  })*/

  /* it('Should return 400 if read one works', async () => {
    getUser.mockReset()
    await request(app).get(`/user/${id}`).send().then(res => {
      expect(getUser.mock.calls.length).toBe(1)
      expect(res.statusCode).toBe(200)
      expect(getUser.mock.calls[0][0].username).toBe("CREATE");
      expect(getUser.mock.calls[0][0].age).toBe(20);
      expect(getUser.mock.calls[0][0].email).toBe("test@test.com");
      expect(getUser.mock.calls[0][0].password).toBe("test");
    }
    )
  }) */

  it('Should return 200 if update information route works', async () => {
    changeUser.mockReset()
    await request(app).put(`/user/${id}`).send({
      username: 'CREATE2',
      age: 12,
      email: "test2@test.com",
      password: "test2"
    }).then(res => {
      expect(changeUser.mock.calls.length).toBe(1)
      expect(res.statusCode).toBe(200)
      expect(changeUser.mock.calls[0][1].username).toBe("CREATE2");
      expect(changeUser.mock.calls[0][1].age).toBe(12);
      expect(changeUser.mock.calls[0][1].email).toBe("test2@test.com");
      expect(changeUser.mock.calls[0][1].password).toBe("test2");
    }
    )
  })

  it('Should return 200 if delete route works', async () => {
    deleteUser.mockReset()
    await request(app).delete(`/user/${id}`).send().then(res => {
      expect(deleteUser.mock.calls.length).toBe(1)
      expect(res.statusCode).toBe(200)
    }
    )
  })
});


describe('Test if rest routes return 204 on empty content', () => {

  it('Should return 204 if create route has empty body', async () => {
    addUser.mockReset()
    await request(app).post(`/user`).send().then(res => {
      expect(res.statusCode).toBe(204)
    }
    )
  })

  it('Should return 204 if update information route has empty body', async () => {
    changeUser.mockReset()
    await request(app).put(`/user/${id}`).send().then(res => {
      expect(res.statusCode).toBe(204)
    }
    )
  })

});

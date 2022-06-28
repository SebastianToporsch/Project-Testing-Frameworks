import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config({ path: './config/.env' });
import request from "superagent";
const rest_port = process.env.REST_PORT || 8083;
const baseURL = `http://localhost:${rest_port}`


var id;

describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL + "/health")
      .then(res => {
        expect(res.statusCode).to.equal(200)
        expect(res.text).to.equal("Hello there")
      })
  })
})


it('Should return 404 page if no users are in the database', async () => {
  request.get(baseURL + "/user")
    .then(res => {
      expect(res.statusCode).to.equal(200);
      expect(res.text).to.contain("No user found");
    }).catch(e => {

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
        expect(res.statusCode).to.equal(200)
        expect(res.body.data.username).to.contain("CREATE")
        expect(res.body.data.age).to.equal(20)
        expect(res.body.data.email).to.equal("test@test.com")
        expect(res.body.data.password).to.equal("test")
      })
  })

  it('Should return 200 if read all route works', async () => {
    await request.get(baseURL + "/user")
      .then(res => {
        expect(res.statusCode).to.equal(200)
        expect(res.body.data[0].username).to.equal("CREATE")
        expect(res.body.data[0].age).to.equal(20)
        expect(res.body.data[0].email).to.equal("test@test.com")

        id = res.body.data[0].id
      }).catch(e => {

      })
  })

  it('Should return 200 if read one route works', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).to.equal(200)
        expect(res.body.data[0].id).to.equal(id)
        expect(res.body.data[0].username).to.equal("CREATE")
        expect(res.body.data[0].age).to.equal(20)
        expect(res.body.data[0].email).to.equal("test@test.com")
      }).catch(e => {

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
        expect(res.statusCode).to.equal(200);
        expect(res.body.data.username).to.equal("CREATE2")
        expect(res.body.data.age).to.equal(12)
        expect(res.body.data.email).to.equal("test2@test.com")
        expect(res.body.data.password).to.equal("test2")

      })
  })

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + `/user/${id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).to.equal(200)
      })
  })
})

describe('Test if rest routes return 204 on empty content', () => {
  it('Should return 204 if create route has empty body', async () => {
    await request
      .post(baseURL + "/user")
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).to.equal(204)
      })
  })

  it('Should return 204 if update information route has empty body', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send()
      .then(res => {
        expect(res.statusCode).to.equal(204)
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
        expect(res.text).not.contains("CREATE");
      }).catch((error) => {
        expect(error.status).to.equal(400)
        expect(error.response.text).to.contain("One or multiple fields are empty!")
      });
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
        expect(res.text).to.equal("CREATE");
      }).catch((error) => {
        expect(error.status).to.equal(400)
        expect(error.response.text).to.contain("One or multiple fields are empty!")
      })
  })

  it('Should return 404 if read all route returns no user', async () => {
    await request.get(baseURL + "/user")
      .then(res => {
        expect(res.statusCode).to.equal(404)
        expect(res.text).to.contain("No user found")
      }).catch(e => {

      })
  })

  it('Should return 404 if read one route returns no user', async () => {
    await request.get(baseURL + `/user/0`)
      .then(res => {
        expect(res.statusCode).to.equal(404)
        expect(res.text).to.contain("No user found")
      }).catch(e => {
      })
  })

})
after(async () => {
  await request.delete(baseURL + `/user/${id}`)
})
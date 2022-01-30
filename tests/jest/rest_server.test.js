const request = require('superagent');
require('dotenv').config({ path: 'config/.env' });
const rest_port = process.env.REST_PORT || 3000;
const baseURL = `http://localhost:${rest_port}`

var id = "1";

describe('Test if server is available', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200);
      })
  });
});

describe('Test if server contains expected text', () => {
  it('Should return 200 if server available', async () => {
    request.get(baseURL)
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Hello there")
      })
  });

  it('Should return 404 page if no users are in the database', async () => {
    request.get(baseURL + "/users")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user")
      })
  });
});


describe('Test if rest routes return 200 on success', () => {
  it('Should return 200 if create route works', async () => {
    await request
      .post(baseURL + "/user")
      .send({ username: 'CREATE', age: 10, email: "test@test.com", password: "test" })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("CREATE");
      })
  });

  it('Should return 200 if read all route works', async () => {
    await request.get(baseURL + "/users")
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Id / Username");
        expect(res.text).toContain("CREATE");
        let match = new RegExp("<li>ID: ([0-9].*).\/.*CREATE<").exec(res.text);
        id = match[1]
      })
  });

  it('Should return 200 if read one route works', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("The user is");
        expect(res.text).toContain("CREATE");
      })
  });

  it('Should return 200 if update information route works', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send({ username: 'CREATE2', age: 12 })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Name and Age update successful");
      })
  });

  it('Should return 200 if update email route works', async () => {
    await request
      .put(baseURL + `/user/${id}/email`)
      .send({ email: "test2@test2.com" })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Email update successful");
      })
  });

  it('Should return 200 if update password route works', async () => {
    await request
      .put(baseURL + `/user/${id}/password`)
      .send({ password: "test2" })
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Password update successful");
      })
  });

  it('Should return 200 if delete route works', async () => {
    await request.delete(baseURL + "/user")
      .send({ username: 'CREATE2' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200);
      })
  });
});

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
  });

  it('Should return 204 if update information route has empty body', async () => {
    await request
      .put(baseURL + `/user/${id}`)
      .send()
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  });

  it('Should return 204 if update email route has empty body', async () => {
    await request
      .put(baseURL + `/user/${id}/email`)
      .send()
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  });

  it('Should return 204 if update password route has empty body', async () => {
    await request
      .put(baseURL + `/user/${id}/password`)
      .send()
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  });

  it('Should return 204 if delete has empty body', async () => {
    await request.delete(baseURL + "/user")
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(204);
      })
  });
});


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
      });
  });

  it('Should return 404 page if read all route returns no user', async () => {
    await request.get(baseURL + "/users")
      .then(res => {

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user found");
      })
  });

  it('Should return 404 page if read one route returns no user', async () => {
    await request.get(baseURL + `/user/${id}`)
      .then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("No user found");
      })
  });

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

  it('Should return 400 if update email request has empty parameters', async () => {
    await request
      .put(baseURL + `/user/${id}/email`)
      .send({ email: "" })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("Empty email")
      })
  })

  it('Should return 400 if update password request has empty parameters', async () => {
    await request
      .put(baseURL + `/user/${id}/password`)
      .send({ password: "" })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.text).not.toContain("CREATE");
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("Empty password")
      })
  })

  it('Should return 400 if delete request has empty parameters', async () => {
    await request.delete(baseURL + "/user")
      .send({ username: '' })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(400);
      }).catch((error) => {
        expect(error.status).toBe(400)
        expect(error.response.text).toContain("Empty username")
      });
  });
});



afterAll(async () => {
  await request.delete(baseURL + "/user")
    .send({ username: 'CREATE' })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')

  await request.delete(baseURL + "/user")
    .send({ username: 'CREATE2' })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
});
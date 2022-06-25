import express from "express";

export default function makeApp (DBConnection) { 
const app = express();
app.use(express.json());

//home screen
app.get('/', function (req, res) {
  return res.render('rest/rest_index', { message: 'Hello there!' });
});

//create
app.post("/user", async (req, res) => {
  const newUser = {
    username: req.body.username,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password
  }

  if (Object.keys(req.body).length === 0) {
    return res.status(204).json({ "data": "Empty body" })
  }

  if (newUser.username != null && newUser.username  && newUser.age != null && newUser.email != null && newUser.password != null) {
    if( newUser.username !="" && newUser.age != "" && newUser.email != "" && newUser.password != "")
    DBConnection.addUser(newUser)
    return res.status(200).json({ "data": newUser })
  } else {
    return res.status(400).json({ "data": "One or multiple fields are empty!" })
  }
});

//readOne
app.get("/user/:id", async (req, res) => {
  try {
    let id = Number(req.params.id)


    DBConnection.getUser({
      id: id
    })
      .then(r => {

        if (r[0] === undefined) {
          return res.render("rest/404");
        }

        return res.render('rest/user', { title: 'User', message: r[0] })
      })
      .catch(e => {
        return res.status(500).send({ error: e })
      });
  } catch (error) {
    return res.status(400).send({ error: "Internal Server Error" })
  }
});

//read all
app.get("/user", async (req, res) => {
  try {
    DBConnection.getUsers({}).then(r => {
      if (r.length == 0) {
        return res.render("rest/404")
      }
      return res.render('rest/users', { title: 'Users', message: r })
    })
      .catch(e => {
        return res.status(500).send({ error: e })
      });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" })
  }
});

//update
app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = {
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password
    }

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": "Empty body" });
    }

    if (newUser.username == "" || newUser.age <= 0 || newUser.email <= 0 || newUser.password <= 0) {
      return res.status(400).json({ "data": "One or multiple fields are empty!" })
    } else {
      DBConnection.changeUser(id, newUser)
      return res.status(200).json({ "data": newUser })
    }
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" })
  }

});

//delete
app.delete("/user/:id", async (req, res) => {
  let id = Number(req.params.id)
  try {
    DBConnection.deleteUser(id)
    return res.status(200).json({ "data": "User deleted" })
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" })
  }
});

  return app;
}
import express from "express";
import bodyParser from "body-parser";

export default function makeApp(DBConnection) {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());

  app.get("/health", async (req, res) => {
    return res.status(200).send("Hello there");
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
      return res.status(204).json({ message: "Empty body" })
    }

    if (newUser.username != null && newUser.username && newUser.age != null && newUser.email != null && newUser.password != null) {
      if (newUser.username != "" && newUser.age != "" && newUser.email != "" && newUser.password != "")
        DBConnection.addUser(newUser)
      return res.status(200).json({ "data": newUser })
    } else {
      return res.status(400).json({ message: "One or multiple fields are empty!" })
    }
  });

  //readOne
  app.get("/user/:id", async (req, res) => {
    try {
      let id = Number(req.params.id)

      const user = await DBConnection.getUser(id);
      if (user == undefined || user == null || user.length == 0) {
        return res.status(404).send({ message: "No user found" })
      }
      return res.status(200).send({ data: user })
        .catch(e => {
          return res.status(400).send({ error: e })
        });
    } catch (error) {
      return
    }
  });

  //read all
  app.get("/user", async (req, res) => {
    try {

      const users = await DBConnection.getUsers();
      if (users == undefined || users == null || users.length == 0) {
        return res.status(404).send({ message: "No user found" })
      }
      return res.status(200).send({ data: users })

        .catch(e => {
          return res.status(400).send({ error: e })
        });


    } catch (error) {
      return
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
        return res.status(204).json({ message: "Empty body" });
      }

      if (newUser.username == undefined || newUser.age == undefined || newUser.email == undefined || newUser.password == undefined 
        ||newUser.username == "" || newUser.age <= 0 || newUser.email <= 0 || newUser.password <= 0   ) {
          return res.status(400).json({ message: "One or multiple fields are empty!" })
        } else {
          DBConnection.changeUser(id, newUser)
          return res.status(200).json({ data: newUser })
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
      return res.status(200).json({ message: "User deleted" })
    } catch (error) {
      return res.status(500).send({ error: "Internal Server Error" })
    }
  });

  return app;
}
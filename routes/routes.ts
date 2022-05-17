import express, { Request, Response } from "express";
import * as userModel from '../models/userModel';
import { User, UserwithPassword as UserWithPassword } from '../types/userType';

const userRoute = express.Router();

userRoute.get('/', function (req, res) {
  return res.render('rest/rest_index', { message: 'Hello there!' });
});

userRoute.post("/user", async (req: Request, res: Response) => {
  const newUser: UserWithPassword = req.body;

  userModel.create(newUser, (err: Error) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (newUser.username == "" || newUser.age <= 0) {
      return res.status(400).json({ "data": "Empty username or age" });
    }
    res.status(200).json({ "data": newUser });
  });
});


userRoute.get("/user", async (req: Request, res: Response) => {
  userModel.readAll((err: Error, users: User[]) => {


    if (users.length == 0) {
      return res.render("rest/404");
    }

    if (err) {
      return res.status(500);
    }

    return res.render('rest/users', { title: 'Users', message: users });
  });
});

userRoute.get("/user/:id", async (req: Request, res: Response) => {
  let id: number = Number(req.params.id);
  userModel.readOne(id, (err: Error, user: User) => {

    if (user == undefined) {
      return res.render("rest/404");
    }

    if (err) {
      return res.status(500).json({ "message": err.message });
    }

    return res.render('rest/user', { title: 'User', message: user });
  });
});

userRoute.put("/user/:id", async (req: Request, res: Response) => {
  const newUser: User = req.body;
  const id: String = req.params.id;
  userModel.updateInformation(newUser, id, (err: Error) => {

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (newUser.username == "" || newUser.age <= 0) {
      return res.status(400).json({ "data": err });
    }

    res.status(200).json({ "message": err });
  });
});

userRoute.delete("/user/:id", async (req: Request, res: Response) => {
  let id: number = Number(req.params.id);
  userModel.del(id, (err: Error) => {

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (id <= 0) {
      return res.status(400).json({ "message": "Empty username" });
    }

    res.status(200).json({ "message": err });
  });
});

export { userRoute };
import express, { Request, Response } from "express";
import * as userModel from '../models/userModel';
import { User, UserwithPassword } from '../types/userType';
import { validateEmail } from "../util/database-functions";

const userRoute = express.Router();

userRoute.get('/', function (req, res) {
  return res.render('rest_index', { title: 'Hey', message: 'Hello there!' });
});

userRoute.post("/user", async (req: Request, res: Response) => {
  const newUser: UserwithPassword = req.body;

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


userRoute.get("/users", async (req: Request, res: Response) => {
  userModel.readAll((err: Error, users: User[]) => {


    if (users.length == 0) {
      return res.render("404");
    }

    if (err) {
      return res.status(500);
    }

    return res.render('users', { title: 'Users', message: users });
  });
});

userRoute.get("/user/:id", async (req: Request, res: Response) => {
  let id: number = Number(req.params.id);
  userModel.readOne(id, (err: Error, user: User) => {

    if (user == undefined) {
      return res.render("404");
    }

    if (err) {
      return res.status(500).json({ "message": err.message });
    }

    return res.render('user', { title: 'User', message: user });
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


userRoute.put("/user/:id/email", async (req: Request, res: Response) => {
  const newEmail: String = req.body.email;
  const id: String = req.params.id;
  userModel.updateEmail(newEmail, id, async (err: Error) => {

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (await validateEmail(newEmail) == false) {
      return res.status(400).json({ "data": err });
    }

    res.status(200).json({ "message": err });
  });
});

userRoute.put("/user/:id/password", async (req: Request, res: Response) => {
  const newPassword: String = req.body.password;
  const id : String = req.params.id;
  userModel.updatePassword(newPassword, id, (err: Error) => {

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (newPassword.length <= 0) {
      return res.status(400).json({ "data": err });
    }

    res.status(200).json({ "message": err });
  });
});

userRoute.delete("/user", async (req: Request, res: Response) => {
  const userName: String = req.body.username;
  userModel.del(userName, (err: Error) => {

    if (Object.keys(req.body).length === 0) {
      return res.status(204).json({ "data": err });
    }

    if (userName.length == 0) {
      return res.status(400).json({ "message": "Empty username" });
    }

    res.status(200).json({ "message": err });
  });
});

export { userRoute };
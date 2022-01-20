import express, { Request, Response } from "express";
import * as userModel from '../models/userModel';
import { User } from '../types/userType';

const userRoute = express.Router();

userRoute.get('/', function (req, res) {
  return res.render('index', { title: 'Hey', message: 'Hello there!' });
});

userRoute.post("/user", async (req: Request, res: Response) => {

  const newUser: User = req.body;


  userModel.create(newUser, (err: Error) => {

    if (newUser.username == "" ||  newUser.age <= 0) {
      return res.status(204).json({ "data": "Empty username or age" });
  }

    res.status(200).json({ "data": newUser });
  });
});


userRoute.get("/users", async (req: Request, res: Response) => {
  userModel.readAll((err: Error, users: User[]) => {
    
    if(users.length ==0){
      return res.render("404");
    }

    if (err) {
      return res.status(500);
    }

    return res.render('users', { title: 'Users', message: users });
  });
});

userRoute.get("/user/:username", async (req: Request, res: Response) => {
  let userName: String = String(req.params.username);
  userModel.readOne(userName, (err: Error, user: User) => {

    if(user == undefined){
      return res.render("404") ;
    }
    

    if (err) {
      return res.status(500).json({ "message": err.message });
    }
    return res.render('user', { title: 'User', message: user });
  });
});

userRoute.put("/user/:username", async (req: Request, res: Response) => {
  const newUser: User = req.body;
  userModel.update(newUser, (err: Error, user: User) => {
    

    if (newUser.username == "" ||  newUser.age <= 0) {
      return res.status(204).json({ "data": user });
    }

    res.status(200).json({ "message": err });
  });
});

userRoute.delete("/user", async (req: Request, res: Response) => {
  const userName: String = String(req.body.username);
  userModel.del(userName, (err: Error) => {
    
    if (userName.length == 0) {
      return res.status(404).json({ "message": "Empty username" });
    }

    res.status(200).json({ "message": err });
  });
});

export { userRoute };
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

    if (err) {
      return res.status(500).json({
      });
    }

    res.status(200).json({ "data": newUser });
  });
});


userRoute.get("/users", async (req: Request, res: Response) => {
  userModel.readAll((err: Error, users: User[]) => {

    if (err) {
      return res.status(500).json({"statusCode": 500});
    }

    return res.render('users', { title: 'Users', message: users });
  });
});

userRoute.get("/user/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  userModel.readOne(userId, (err: Error, user: User) => {

    if (err) {
      return res.status(500).json({ "message": err.message });
    }
    return res.render('user', { title: 'User', message: user });
  });

});

userRoute.put("/user/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  const newUser: User = req.body;
  userModel.update(newUser, userId, (err: Error, user: User) => {

    if (err) {
      return res.status(500).json({ "data": user });
    }

    res.status(200).json({ "message": err });
  });
});

userRoute.delete("/user/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  userModel.del(userId, (err: Error) => {

    if (err) {
      return res.status(500).json({ "message": err });
    }

    res.status(200).json({ "message": err });
  });
});

export { userRoute };
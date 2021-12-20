import express, { Request, Response } from "express";
import * as userModel from '../models/userModel';
import { readAll } from '../models/userModel';
import { User } from '../types/userType';


const userRoute = express.Router();

userRoute.post("/", async (req: Request, res: Response) => {

  const newUser: User = req.body;
  console.log(req.body);
  
  
  userModel.create(newUser, (err: Error) => {
    
    if (err) {
      return res.status(500).json({
      });
    }

    res.status(200).json({"works":"ez"});
  });
});


  userRoute.get("/users", async (req: Request, res: Response) => {
    userModel.readAll((err: Error, users: User[]) => {

      if (err) {
        return res.status(500).json({
        });
      }

      res.status(200).json({ "data": users });
    });
  });

  userRoute.get("/user/:id", async (req: Request, res: Response) => {
    const userId: number = Number(req.params.id);
    userModel.readOne(userId, (err: Error, user: User) => {

      if (err) {
        console.log("ERROR");
        return res.status(500).json({ "message": err.message });
      }
      res.status(200).json({ "data": user });
    });

  });

  userRoute.put("/:id",async (req:Request,res:Response) => {
    const user: User = req.body;
    userModel.update(user,(err:Error) => {
    
    if(err){
      return res.status(500).json({ "message": err });
    }

    res.status(200).json({"message":err});
  });
});

export{userRoute};
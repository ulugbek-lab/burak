import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
    // send, json , redirect , end , render
  } catch (err) {
    console.log("ERROR, goHome:", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("ERROR, getSignup:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("process login");
    res.send("done");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};
export default restaurantController;

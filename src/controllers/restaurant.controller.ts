import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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
    res.send("login posted done");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("process Signup");

    const newMember: MemberInput = req.body;

    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("ERROR, getSignup:", err);
    res.send(err);
  }
};
export default restaurantController;

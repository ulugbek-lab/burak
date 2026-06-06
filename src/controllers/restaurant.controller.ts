import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.render("home");
    // send, json , redirect , end , render
  } catch (err) {
    console.log("ERROR, goHome:", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("Signup");
  } catch (err) {
    console.log("ERROR, getSignup:", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("process Signup");

    const newMember: MemberInput = req.body;

    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO SESSIONS

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });

    res.send(result);
  } catch (err) {
    console.log("ERROR, getSignup:", err);
    res.send(err);
  }
};
restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("process login");
    console.log(req.body);
    //TODO SESSIONS

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("ERROR, processLogin:", err);
    res.send(err);
  }
};

export default restaurantController;

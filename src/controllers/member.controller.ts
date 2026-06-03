import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { Member, MemberInput, LoginInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    //TODO TOKENS

    res.json({ member: result });
  } catch (err) {
    console.log("ERROR, signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({});
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("process login");
    console.log(req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //TODO TOKENS
    res.json({ member: result });
  } catch (err) {
    console.log("ERROR, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({});
  }
};

//REACT
export default memberController;

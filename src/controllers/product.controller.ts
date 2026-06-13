import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: AdminRequest, res: Response) => {
  try {
    console.log("getAllProducts");
    // console.log(req.member);
    res.render("products");
  } catch (err) {
    console.log("ERROR, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.createNewProducts = async (req: Request, res: Response) => {
  try {
    console.log("createNewProducts");
    console.log(req.files);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

     

    res.send("done ");
  } catch (err) {
    console.log("ERROR, createNewProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({});
  }
};
productController.updateChosenProducts = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log("updateChosenProducts");
  } catch (err) {
    console.log("ERROR, updateChosenProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({});
  }
};

export default productController;

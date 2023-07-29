import express, { Router, Request, Response } from "express";
import AccessController from '../../controllers/access.controller';
import { asyncHandler } from '../../utils/errors'
import validate from "../../middleware/validate.middleware";
import checkToken from "../../middleware/checkToken.middleware";
import { createUserSchema, loginUserSchema } from "../../interface/shemas/user.shemas";


class Access {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
    }
    
    get getRouter(): any {
        return this.router;
    }

  protected registerRoutes(): void {

    this.router.get(
      "/",
      checkToken,
      asyncHandler(AccessController.privateAPI)
    );

    this.router.get(
      "/long123",
      asyncHandler(AccessController.publicAPI)
    );
    
    this.router.post(
      "/sign-up",
      validate(createUserSchema),
      asyncHandler(AccessController.signUp)
    );
    
    this.router.post(
      "/login",
      validate(loginUserSchema),
      asyncHandler(AccessController.logIn)
    );


  }
}

export default new Access;

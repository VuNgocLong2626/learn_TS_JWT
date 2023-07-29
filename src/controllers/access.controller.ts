import { Request, Response, NextFunction } from "express";
import { CreateUserInput, LoginUserInput } from "@interface/shemas/user.shemas";
import AccessServices from "../services/access.services";
import CookieServices from "../services/cookie.services";
import { OK, CREATE } from "../core/success.response";

class AccessController {
  signUp = async (
    req: Request<{}, {}, CreateUserInput>,
    res: Response,
    next: NextFunction
  ) => {
    const { accessToken, refreshToken } = await AccessServices.signUp(req.body);

    CookieServices.setCookie(res, accessToken, refreshToken);

    new CREATE({
      message: "Regiserted OK",
      metadata: { accessToken, refreshToken },
    }).send(res);
  };

  logIn = async (
    req: Request<{}, {}, LoginUserInput>,
    res: Response,
    next: NextFunction
  ) => {
    const { accessToken, refreshToken } = await AccessServices.logIn(req.body);

    CookieServices.setCookie(res, accessToken, refreshToken);

    new OK({
      message: "Login Successfull",
      metadata: { accessToken, refreshToken },
    }).send(res);
  };

  publicAPI = async (req: Request, res: Response, next: NextFunction) => {

    new OK({
      message: "Ok men",
      metadata: {
        rule: "anonymous",
      },
    }).send(res);
  };

  privateAPI = async (req: Request, res: Response, next: NextFunction) => {
    new OK({
      message: "Ok men",
      metadata: {
        rule: "Admin11111",
      },
    }).send(res);
  };
}

export default new AccessController();

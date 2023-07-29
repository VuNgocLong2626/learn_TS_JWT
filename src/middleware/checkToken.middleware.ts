import { NextFunction, Request, Response } from "express";
import HttpException from "../core/HttpException";
import jwt from "jsonwebtoken";
import redisServices from "../services/redis.services";
import verifyRefreshToken from "../utils/verifyRefreshToke1";


const checkToken = async (req: Request, res: Response, next: NextFunction) => {
  const privateKey: string = process.env.ACCESS_TOKEN_PRIVATE_KEY || "";
  const accessToken = req.cookies["accessToken"];

  if (!accessToken) return next(new HttpException(401, "Error Unauthenticated"));

  try {
    jwt.verify(accessToken, privateKey);
  } catch (error) {
    const refreshToken = await redisServices.getPromise(`key:${accessToken}`)
    if(!refreshToken) return next(new HttpException(401, "Error Unauthenticated"));
    try {
  const privateKey: string = process.env.REFRESH_TOKEN_PRIVATE_KEY || ""
      const payload = jwt.verify(refreshToken + '', privateKey);
      const accessTokenRefresh = await verifyRefreshToken({payload})
      console.log(accessTokenRefresh);
      res.cookie('accessToken', accessTokenRefresh, { httpOnly: true });
    } catch (error) {
      next( new HttpException(403, (error as Error).message));
    }

  }
  next();
};

export default checkToken;

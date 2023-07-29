import HttpException from "../core/HttpException";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";


const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      next(new HttpException(400,'Erro Validate'));
    }
  };

export default validate;
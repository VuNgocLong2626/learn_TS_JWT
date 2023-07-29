import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import MainAPI from "./routes/index";
import errorMiddleware from './middleware/error.middleware'
import cookieParser from "cookie-parser";

export default class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.initializeErrorHandling();
  }

  public config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser())
    this.app.use("/", MainAPI.router);
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

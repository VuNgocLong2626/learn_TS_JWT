import Supabase from "../../dbs/supabase.connect";
import express, { Router, Request, Response } from "express";
import test from "../../dbs/supabase";

class Auth {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  get getRouter(): any {
    return this.router;
  }

  protected registerRoutes(): void {
    // this.router.get("/", async (req: Request, res: Response): Promise<any> => {
    //   const { data, error } = await test.from("test").select().eq("id", 2);
    //   console.log(error, data);
    //   res.send(data);
    // });

    this.router.post(
      "/login",
      async (req: Request, res: Response): Promise<any> => {
        // const { data, error } = await Supabase.getInstance().auth.signUp({
        //   email: "long1234@gmail.com",
        //   password: "long1234",
        //   options: {
        //     data: {
        //       first_name: "vu",
        //       last_name: 'long',
        //     },
        //   },
        // });

        // const { data, error } = await Supabase.getInstance().auth.signInWithPassword({
        //   email: "long1234@gmail.com",
        //   password: "long1234",
        // });

        // const data1 = await test.channel
        // const currentSession= {
        //   access_token: session?.access_token || '',
        //   refresh_token: session?.refresh_token || ''
        // }
        // const k = await Supabase.getInstance().auth.setSession(currentSession);
        // console.log(k);
        // res.cookie('accessToken', session?.access_token, { httpOnly: true });

        // const go = new GoTrueClient(session)
        // const{user, session} = data
        //   const { error } = await test.auth.signOut()
        // console.log(await Supabase.getInstance().auth.getSession());
        // console.log(error);
        // res.send(data);
        console.log("1");

        // const interval = setInterval(function () {
        //   console.log("10");
        // }, 5000);
        setTimeout(function () {
          console.log("10");
        }, 5000);

        // clearInterval(interval);
        res.send({
          ahi: "ahihihihi",
        });
      }
    );

    this.router.post(
      "/test",
      async (req: Request, res: Response): Promise<any> => {
        const { data, error } = await Supabase.getInstance()
          .from("test")
          .select();

        console.log(error);
        res.send(data);
      }
    );
  }
}

export default new Auth();

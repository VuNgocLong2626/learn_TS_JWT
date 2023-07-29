import express, { Router } from "express";
import Access from "./access/index";
import Auth from "./Auth";


class MainAPI {
    public router: Router;

    constructor() {
        this.router = express.Router();
        this.main();
    }

    protected main(): void {
        this.router.use('/v1/ap1', Access.router);
        this.router.use('/supabase', Auth.router);
    }
}

export default new MainAPI;
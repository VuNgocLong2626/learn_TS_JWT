import { Response, Request } from 'express';
import redisServices from './redis.services';

interface Tokens {
    accessToken: string,
    refreshToken: string
}

class CookieServices {

    setCookie = async (res: Response, access: string, refresh: string): Promise<void> => {
        res.cookie('accessToken', access, { httpOnly: true });
        // res.cookie('refreshToken', refresh, { httpOnly: true });
        await redisServices.setPromise(`key:${access}`, refresh);
    }

    getCookie = async (req: Request): Promise<Tokens>=> {
        const accessToken = req.cookies["accessToken"];
        const refreshToken = req.cookies["refreshToken"];
        return {
            accessToken,
            refreshToken
        }
    }

}

export default new CookieServices;
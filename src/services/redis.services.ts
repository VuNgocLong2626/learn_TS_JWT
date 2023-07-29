import HttpException from "../core/HttpException";
import redis from "../dbs/redis.connect";

class RedisService {
  setPromise = async (key: string, value: string) => {
    try {
      const expires = (process.env.REFRESH_TOKEN_EXPIRES_IN as string) || "0";
      const time = (+expires / 3) * 24 * 60 * 60;
      return new Promise((isOkay, isError) => {
        redis.getInstance().set(key, value, "EX", 4*60, (err, rs) => {
          return !err ? isOkay(rs) : isError(err);
        });
      });
    } catch (error) {
      throw new HttpException(400, "Redis Set Error");
    }
  };

  getPromise = async (key: string) => {
    try {
      return new Promise((isOkay, isError) => {
        redis.getInstance().get(key, (err, rs) => {
          return !err ? isOkay(rs) : isError(err);
        });
      });
    } catch (error) {
      throw new HttpException(400, "Redis Set Error");
    }
  };
}

export default new RedisService();

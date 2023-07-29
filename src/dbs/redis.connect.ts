import { Redis as redisClass } from "ioredis";


class Redis {
  private static instance: redisClass;

  constructor() {
    Redis.instance = new redisClass(process.env.REDIS_URI as string);
  }

  static getInstance() {
    if (!Redis.instance) Redis.instance = new redisClass(process.env.REDIS_URI as string);
    return Redis.instance;
  }

  public getRedisClient() {
    return Redis;
  }
}


export default Redis;
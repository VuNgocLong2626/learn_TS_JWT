import { createClient, RedisClientType } from "redis";

class Redis {
  private static instance: Redis;
  private static client: RedisClientType;

  private constructor() {
        this.init();
  }

  public init() {
    Redis.client = createClient({ url: process.env.REDIS_URI, });
    return Redis.client;
  }

  static getInstance() {
    if (!Redis.instance) Redis.instance = new Redis();
    return Redis.instance;
  }

  public getRedisClient() {
    return Redis.client;
  }
}

const redis = Redis.getInstance();

export default redis;
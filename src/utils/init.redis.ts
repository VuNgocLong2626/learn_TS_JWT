import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URI,
});

// client.ping(function (err: any, result: any) {
//   console.log(result);
// });

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("error", (error) => {
  console.error(error);
});

export default client;

import { createClient } from "redis";

let client: ReturnType<typeof createClient> | null = null;

const getRedisClient = () => {
  if (!client) {
    client = createClient({ url: process.env.REDIS_URL });
    client.on("error", (err) => console.error("Redis Error:", err));
    client.connect().catch(console.error);
  }
  return client;
};

export { getRedisClient };

import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

import { users } from "../db/schema";

export async function onRequest(ctx) {
  // const pool = new Pool({ connectionString: env.DATABASE_URL });
  const pool = new Pool({
    connectionString:
      "postgresql://troglotit:5OadCe4IMBcm@ep-noisy-thunder-67095905-pooler.eu-central-1.aws.neon.tech/allmagen?sslmode=require",
  });
  const db = drizzle(pool);
  const result = await db.select().from(users);
  ctx.waitUntil(pool.end());
  return new Response(JSON.stringify(result));
}

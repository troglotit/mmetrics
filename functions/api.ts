import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

import { users } from "../db/schema";

export async function onRequest(ctx) {
  const pool = new Pool({ connectionString: env.DATABASE_URL });
  const db = drizzle(pool);
  // const result = await db.select().from(users);
  ctx.waitUntil(pool.end());
  return new Response("asdf");
}

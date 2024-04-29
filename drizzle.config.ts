import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
    schema: "./src/server/db/schema.ts",
    driver: "pg",
    dbCredentials: {
        connectionString: env.DATABASE_URL,
    },
    tablesFilter: ["kama-makuri_*"],
} satisfies Config;

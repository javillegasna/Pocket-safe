import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { envMap } from "@/src/adapters/env";
import * as schema from "@/src/adapters/db/schema";

export const expodb = openDatabaseSync(envMap.EXPO_PUBLIC_DB_NAME, {
  enableChangeListener: true,
});
export const db = drizzle(expodb, { schema });
export type DB = typeof db;

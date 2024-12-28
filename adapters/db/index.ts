import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { envMap } from "@adapters/env";

export const expodb = openDatabaseSync(envMap.EXPO_PUBLIC_DB_NAME);
export const db = drizzle(expodb);
export type DB = typeof db;

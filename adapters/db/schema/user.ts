import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
    "users",
    {
      id: t.int().primaryKey({ autoIncrement: true }),
      userName: t.text("user_name").notNull(),
      email: t.text().notNull(),
      passwordHash: t.text("password_hash").notNull(),
    },
    (table) => [
        t.uniqueIndex("email_idx").on(table.email)
    ]
  );


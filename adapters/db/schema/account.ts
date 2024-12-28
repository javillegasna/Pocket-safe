import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { users } from "@adapters/db/schema/user";

export const accounts = sqliteTable(
  "account",
  {
    id: t.int().primaryKey({ autoIncrement: true }),
    userId: t.int("user_id").references(() => users.id, { onDelete: "cascade" }),
    accountName: t.text("account_name").notNull(),
    balance: t.int().notNull(),
    categoryId: t.int("category_id").references(() => accountCategories.id),
  },
  (table) => [t.unique().on(table.userId, table.accountName)]
);

export const accountCategories = sqliteTable(
  "account_category",
  {
    id: t.int().primaryKey({ autoIncrement: true }),
    userId: t.int("user_id").references(() => users.id, { onDelete: "cascade" }),
    categoryName: t.text("category_name").notNull(),
  },
  (table) => [t.unique().on(table.categoryName)]
);

import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { users } from "@adapters/db/schema/user";
import { InferSelectModel } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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
  (table) => [t.unique().on(table.categoryName, table.userId)]
);

const baseACSchema = createInsertSchema(accountCategories, {
	userId: (userId) => userId.min(1),
	categoryName: (categoryName) => categoryName.min(1).max(50),
}).pick({
	userId: true,
  categoryName: true,
});

export const accountCategoriesSchema = z.union(
  [
    z.object(
      {
        mode: z.literal("create"),
        userId: baseACSchema.shape.userId,
        categoryName: baseACSchema.shape.categoryName,
      }
    ),
    z.object(
      {
        mode: z.literal("edit"),
        id: z.number().min(1),
        userId: baseACSchema.shape.userId,
        categoryName: baseACSchema.shape.categoryName,
      }
    ),
  ]
);

export type AccountCatSchema = z.infer<typeof accountCategoriesSchema>;
export type SelectAccountCatModel = InferSelectModel<typeof accountCategories>;
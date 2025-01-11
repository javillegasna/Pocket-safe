import { sqliteTable } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";
import { users } from "@/src/adapters/db/schema/user";
import { accounts } from "@/src/adapters/db/schema/account";

export const transactionCategories = sqliteTable(
    "transaction_category",
    {
        id: t.int().primaryKey({ autoIncrement: true }),
        userId: t.int("user_id").references(() => users.id, { onDelete: "cascade" }),
        categoryName: t.text("category_name").notNull(),
    },
    (table) => [t.unique().on(table.userId, table.categoryName)]
    );

export const transactions = sqliteTable(
    "transactions",
    {
        id: t.int().primaryKey({ autoIncrement: true }),
        userId: t.int("user_id").references(() => users.id, { onDelete: "cascade" }),
        accountId: t.int("account_id").references(() => accounts.id),
        targetAccountId: t.int("target_account_id").references(() => accounts.id),
        transactionTypeId: t.int("transaction_type_id").references(() => transactionType.id),
        transactionCategoryId: t.int("transaction_category_id").references(() => transactionCategories.id),
        amount: t.int().notNull(),
        transactionDate: t.text("transaction_date").notNull(),
        description: t.text().notNull(),
    },
    (table) => [t.unique().on(table.userId, table.accountId, table.transactionDate)]
    );

export const transactionType = sqliteTable(
    "transaction_type",
    {
        id: t.int().primaryKey({ autoIncrement: true }),
        typeName: t.text("category_name").notNull(),
    },
    (table) => [t.unique().on(table.typeName)]
    );


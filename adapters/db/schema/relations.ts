import { users } from "@adapters/db/schema/user";
import { accountCategories, accounts } from "@adapters/db/schema/account";
import {
  transactionCategories,
  transactions,
  transactionType,
} from "@adapters/db/schema/transaction";
import { relations } from "drizzle-orm";

export const userRelations = relations(users, ({ many }) => ({
  accountCategories: many(accountCategories),
  transactionCategories: many(transactionCategories),
}));

export const transactionRelations = relations(transactions, ({ one }) => ({
  transactionType: one(transactionType),
  transactionCategories: one(transactionCategories),
}));

export const transactionCategoriesRelations = relations(
  transactionCategories,
  ({ one }) => ({
    users: one(users, {
      fields: [transactionCategories.userId],
      references: [users.id],
    }),
  })
);

export const accountsRealtions = relations(accounts, ({ one }) => ({
  accountCategories: one(accountCategories, {
    fields: [accounts.categoryId],
    references: [accountCategories.id],
  }),
}));

export const accountCategoriesRelations = relations(
  accountCategories,
  ({ one }) => ({
    user: one(users, {
      fields: [accountCategories.userId],
      references: [users.id],
    }),
  })
);

import { db } from "@/adapters/db";
import { accountCategories } from "../schema";

export class UserRepository {
  static findUserById(id: number) {
    return db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      with: {
        accountCategories: true,
        transactionCategories: true,
      }
    });
  }
}

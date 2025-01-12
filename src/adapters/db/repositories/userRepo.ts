import { users as userTable } from '@adapters/db/schema/user';
import { db } from "@/src/adapters/db";
import { RegisterSchema } from '@/src/adapters/models/auth';
import { and } from 'drizzle-orm';

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

  static createUser(newUser: RegisterSchema) {
    return db.insert(userTable).values({
        userName: newUser.userName,
        email: newUser.email,
        passwordHash: newUser.password,
      }).returning();
    }
  
  static validateUser(email: string, password: string) {
    const user = db.query.users.findFirst({
      where: (users, { eq }) => and(eq(users.email, email),  eq(users.passwordHash, password)),
      columns: { id: true },
    });
    return user
  }

}

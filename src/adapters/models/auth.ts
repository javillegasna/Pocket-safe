import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = loginSchema.extend({
  confirmPassword: loginSchema.shape.password,
  userName: z.string().min(4),
},

).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export type RegisterSchema = z.infer<typeof registerSchema>;
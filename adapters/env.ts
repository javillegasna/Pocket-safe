import { z } from "zod";

const envSchema = z.object({
    EXPO_PUBLIC_DB_NAME: z.string().min(1)
});

export const envMap  = envSchema.parse(process.env);
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/adapters/db/schema/index.ts',
	out: './src/adapters/db/migrations',
  dialect: 'sqlite',
	driver: 'expo',
} satisfies Config;
